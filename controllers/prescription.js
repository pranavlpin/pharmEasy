var Prescription = require('../models/Prescription');

//create endpoint for 'api/patientPrescriptions/' for POST
exports.patientPrescriptions = function (req, res) {
    console.log("[POST Prescription] Request");
    if (req.body === null) {
        res.json({
            message: "No data received"
        });
    } else if (JSON.stringify(req.body) === '{}') {
        res.json({
            message: "No data received"
        });
    } else {
        Prescription.find({
            patientId: req.body.patientId
        }).exec(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }
};

//create endpoint for 'api/prescriptions/' for POST
exports.postPrescriptions = function (req, res) {
    console.log("[POST Prescription] Request");
    if (req.body === null) {
        res.json({
            message: "No data received"
        });
    } else if (JSON.stringify(req.body) === '{}') {
        res.json({
            message: "No data received"
        });
    } else {
        //create new instance of prescription model
        var prescription = new Prescription(req.body);

        prescription.save(function (err) { //mongoose function
            if (err)
                res.send(err);
            console.log("Request body : " + req.body);
            res.json({
                message: "Prescription details added to the database",
                data: prescription
            });
        });
    }
};
//create endpoint for 'api/prescriptions/' for GET
exports.getPrescriptions = function (req, res) {
    console.log("[GET all Prescription] Request");
    Prescription.find(function (err, prescriptions) {
        if (err) {
            res.send(err);
        } else {
            res.json(prescriptions);
        }
    });
};
//prescription get one
// create endpoint for '/prescriptions/:prescription_id' for GET
exports.getPrescription = function (req, res) {
    console.log("[GET Prescription] Request");
    Prescription.findOne({
        _id: req.params.prescription_id
    }, function (err, prescription) {
        if (err) {
            res.send(err);
        } else {
            console.log("[GET Prescription]Response:" + JSON.stringify(prescription));
            res.json({
                message: "success",
                data: prescription
            });
        }
    });
};
//update specific prescription, firstName and lastName details
//create endpoint for '/prescriptions/:prescription_id' for PUT
exports.putPrescription = function (req, res) {
    console.log("[PUT Prescription] Request");
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
        Prescription.findByIdAndUpdate(req.params.prescription_id, req.body, {
            new: true
        }, function (err, prescription) {
            if (err) {
                res.send(err);
            }
            //prescription = new Prescription(req.body);
            //prescription.save(function(err){
            //	if (err)
            //		res.send(err);
            else {
                console.log(prescription);
                res.json({
                    message: "Prescription updated to the database",
                    data: prescription
                });
            }
            //});
        });
    }
};
//deleted the prescription using id
exports.deletePrescription = function (req, res) {
    console.log("[DELETE Prescription] Request");
    Prescription.findByIdAndRemove(req.params.prescription_id, function (err) {
        if (err)
            res.send(err);
        res.json({
            message: "The prescription has been removed"
        });
    });
};