var User = require("../models/User");
var Patient = require("../models/Patient");
var Pharmacist = require("../models/Pharmacist");
var Doctor = require("../models/Doctor");
var ObjectId = require("mongodb").ObjectID;
//create endpoints /api/login for GET
exports.login = function (req, res) {
  if (req.body === null) {
    res.json({
      message: "No data received"
    });
  } else if (JSON.stringify(req.body) === "{}") {
    res.json({
      message: "No data received"
    });
  } else {
    console.log("Login Request " + JSON.stringify(req.body));
    User.findOne({
        username: req.body.username
      }, {
        id: true,
        username: true,
        access: true
      },
      function (err, loginUser) {
        if (err) {
          console.log("Login Error" + err);
          res.send(err);
        } else if (loginUser.access == 4) {
          Doctor.findOne({
            userId: loginUser.id
          }, function (err, doctor) {
            if (err) {
              console.log("Login Error Doctor" + err);
              res.send(err);
            } else {
              console.log(
                "[login] doctor: " +
                doctor.id +
                "\n data: " +
                JSON.stringify(doctor) +
                JSON.stringify(loginUser.access)
              );
              res.send({
                message: "success",
                data: doctor,
                access: loginUser.access
              });
            }
          });
        } else if (loginUser.access == 5) {
          Pharmacist.findOne({
            userId: ObjectId(String(loginUser.id))
          }).exec(
            function (err, pharmacist) {
              if (err) {
                console.log("Login Error Pharmacist" + err);
                res.send(err); //condition when no user exists
              } else {
                console.log(
                  "[login] pharmacist: " +
                  loginUser.id +
                  "\n data: " +
                  JSON.stringify(pharmacist) +
                  JSON.stringify(loginUser.access)
                );
                res.send({
                  message: "success",
                  data: pharmacist,
                  access: loginUser.access
                });
              }
            }
          );
        } else if (loginUser.access == 3) {
          Patient.findOne({
            userId: loginUser.id
          }, function (err, doctor) {
            if (err) {
              console.log("Login Error Patient" + err);
              res.send(err);
            } else {
              console.log(
                "[login] Patient: " +
                doctor.id +
                "\n data: " +
                JSON.stringify(doctor) +
                JSON.stringify(loginUser.access)
              );
              res.send({
                message: "success",
                data: doctor,
                access: loginUser.access
              });
            }
          });
        }
      }
    );
  }
};