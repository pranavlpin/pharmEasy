var Pharmacist = require('../models/Pharmacist');

//create endpoint for 'api/pharmacists/' for POST
exports.postPharmacists = function (req, res) {
    console.log("[POST Pharmacist] Request");
    if (req.body === null) {
        res.json({
            message: "No data received"
        });
    } else if (JSON.stringify(req.body) === '{}') {
        res.json({
            message: "No data received"
        });
    } else {
        //create new instance of pharmacist model
        var pharmacist = new Pharmacist(req.body);
        //set properties
        //pharmacist.pharmacistName = req.body.name;
        pharmacist.userId = req.user._id;

        pharmacist.save(function (err) { //mongoose function
            if (err)
                res.send(err);
            console.log("Request body : " + req.body);
            res.json({
                message: "Pharmacist details added to the database",
                data: pharmacist
            });
        });
    }
};
//create endpoint for 'api/pharmacists/' for GET
exports.getPharmacists = function (req, res) {
    console.log("[GET all Pharmacist] Request");
    Pharmacist.find(function (err, pharmacists) {
        if (err) {
            res.send(err);
        } else {
            res.json(pharmacists);
        }
    });
};
//pharmacist get one
// create endpoint for '/pharmacists/:pharmacist_id' for GET
exports.getPharmacist = function (req, res) {
    console.log("[GET Pharmacist] Request");
    Pharmacist.findOne({
        _id: req.params.pharmacist_id
    }, function (err, pharmacist) {
        if (err) {
            res.send(err);
        } else {
            console.log("[GET Pharmacist]Response:" + JSON.stringify(pharmacist));
            res.json({
                message: "success",
                data: pharmacist
            });
        }
    });
};
//update specific pharmacist, firstName and lastName details
//create endpoint for '/pharmacists/:pharmacist_id' for PUT
exports.putPharmacist = function (req, res) {
    console.log("[PUT Pharmacist] Request");
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
        Pharmacist.findByIdAndUpdate(req.params.pharmacist_id, req.body, {
            new: true
        }, function (err, pharmacist) {
            if (err) {
                res.send(err);
            }
            //pharmacist = new Pharmacist(req.body);
            //pharmacist.save(function(err){
            //	if (err)
            //		res.send(err);
            else {
                console.log(pharmacist);
                res.json({
                    message: "Pharmacist updated to the database",
                    data: pharmacist
                });
            }
            //});
        });
    }
};
//deleted the pharmacist using id
exports.deletePharmacist = function (req, res) {
    console.log("[DELETE Pharmacist] Request");
    Pharmacist.findByIdAndRemove(req.params.pharmacist_id, function (err) {
        if (err)
            res.send(err);
        res.json({
            message: "The pharmacist has been removed"
        });
    });
};