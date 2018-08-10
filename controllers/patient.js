var Patient = require('../models/Patient');

//create endpoint for 'api/patients/' for POST
exports.postPatients = function (req, res) {
    console.log("[POST Patient] Request");
    if (req.body === null) {
        res.json({
            message: "No data received"
        });
    } else if (JSON.stringify(req.body) === '{}') {
        res.json({
            message: "No data received"
        });
    } else {
        //create new instance of patient model
        var patient = new Patient(req.body);
        //set properties
        //patient.patientName = req.body.name;
        patient.userId = req.user._id;

        patient.save(function (err) { //mongoose function
            if (err)
                res.send(err);
            console.log("Request body : " + req.body);
            res.json({
                message: "Patient details added to the database",
                data: patient
            });
        });
    }
};
//create endpoint for 'api/patients/' for GET
exports.getPatients = function (req, res) {
    console.log("[GET all Patient] Request");
    Patient.find(function (err, patients) {
        if (err) {
            res.send(err);
        } else {
            res.json(patients);
        }
    });
};
//patient get one
// create endpoint for '/patients/:patient_id' for GET
exports.getPatient = function (req, res) {
    console.log("[GET Patient] Request");
    Patient.findOne({
        _id: req.params.patient_id
    }, function (err, patient) {
        if (err) {
            res.send(err);
        } else {
            console.log("[GET Patient]Response:" + JSON.stringify(patient));
            res.json({
                message: "success",
                data: patient
            });
        }
    });
};
//update specific patient, firstName and lastName details
//create endpoint for '/patients/:patient_id' for PUT
exports.putPatient = function (req, res) {
    console.log("[PUT Patient] Request");
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
        Patient.findByIdAndUpdate(req.params.patient_id, req.body, {
            new: true
        }, function (err, patient) {
            if (err) {
                res.send(err);
            }
            //patient = new Patient(req.body);
            //patient.save(function(err){
            //	if (err)
            //		res.send(err);
            else {
                console.log(patient);
                res.json({
                    message: "Patient updated to the database",
                    data: patient
                });
            }
            //});
        });
    }
};
//deleted the patient using id
exports.deletePatient = function (req, res) {
    console.log("[DELETE Patient] Request");
    Patient.findByIdAndRemove(req.params.patient_id, function (err) {
        if (err)
            res.send(err);
        res.json({
            message: "The patient has been removed"
        });
    });
};