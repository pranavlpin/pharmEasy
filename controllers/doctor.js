var Doctor = require('../models/Doctor');

//create endpoint for 'api/doctors/' for POST
exports.postDoctors = function (req, res) {
    console.log("[POST Doctor] Request");
    if (req.body === null) {
        res.json({
            message: "No data received"
        });
    } else if (JSON.stringify(req.body) === '{}') {
        res.json({
            message: "No data received"
        });
    } else {
        //create new instance of doctor model
        var doctor = new Doctor(req.body);
        //set properties
        //doctor.doctorName = req.body.name;
        doctor.userId = req.user._id;

        doctor.save(function (err) { //mongoose function
            if (err)
                res.send(err);
            console.log("Request body : " + req.body);
            res.json({
                message: "Doctor details added to the database",
                data: doctor
            });
        });
    }
};
//create endpoint for 'api/doctors/' for GET
exports.getDoctors = function (req, res) {
    console.log("[GET all Doctor] Request");
    Doctor.find(function (err, doctors) {
        if (err) {
            res.send(err);
        } else {
            res.json(doctors);
        }
    });
};
//doctor get one
// create endpoint for '/doctors/:doctor_id' for GET
exports.getDoctor = function (req, res) {
    console.log("[GET Doctor] Request");
    Doctor.findOne({
        _id: req.params.doctor_id
    }, function (err, doctor) {
        if (err) {
            res.send(err);
        } else {
            console.log("[GET Doctor]Response:" + JSON.stringify(doctor));
            res.json({
                message: "success",
                data: doctor
            });
        }
    });
};
//update specific doctor, firstName and lastName details
//create endpoint for '/doctors/:doctor_id' for PUT
exports.putDoctor = function (req, res) {
    console.log("[PUT Doctor] Request");
    if (req.body === null) {
        res.json({
            message: "No data received"
        });
    } else if (JSON.stringify(req.body) === '{}') {
        res.json({
            message: "No data received"
        });
    } else {
        //changing here
        Doctor.findByIdAndUpdate(req.params.doctor_id, req.body, {
            new: true
        }, function (err, doctor) {
            if (err) {
                res.send(err);
            }
            //doctor = new Doctor(req.body);
            //doctor.save(function(err){
            //	if (err)
            //		res.send(err);
            else {
                console.log(doctor);
                res.json({
                    message: "Doctor updated to the database",
                    data: doctor
                });
            }
            //});
        });
    }
};
//deleted the doctor using id
exports.deleteDoctor = function (req, res) {
    console.log("[DELETE Doctor] Request");
    Doctor.findByIdAndRemove(req.params.doctor_id, function (err) {
        if (err)
            res.send(err);
        res.json({
            message: "The doctor has been removed"
        });
    });
};