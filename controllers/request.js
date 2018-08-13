var Request = require('../models/Request');

//create endpoint for 'api/doctorPatientRequest/' for POST
exports.doctorPatientRequest = function (req, res) {
    if (req.body === null) {
        res.json({
            message: "No data received"
        });
    } else if (JSON.stringify(req.body) === '{}') {
        res.json({
            message: "No data received"
        });
    } else {
        Request.find({
            patientDetail: req.body.patientDetail,
            doctorDetail: req.body.doctorDetail,
            requestApproved: true
        }).exec(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }
};
//create endpoint for 'api/pharmacistPatientRequests/' for POST
exports.pharmacistPatientRequest = function (req, res) {
    if (req.body === null) {
        res.json({
            message: "No data received"
        });
    } else if (JSON.stringify(req.body) === '{}') {
        res.json({
            message: "No data received"
        });
    } else {
        Request.find({
            patientDetail: req.body.patientDetail,
            pharmacistDetail: req.body.pharmacistDetail,
            requestApproved: true
        }).exec(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }
};
//create endpoint for 'api/patientRequests/' for POST
exports.patientRequests = function (req, res) {
    if (req.body === null) {
        res.json({
            message: "No data received"
        });
    } else if (JSON.stringify(req.body) === '{}') {
        res.json({
            message: "No data received"
        });
    } else {
        Request.find({
            patientDetail: req.body.patientDetail,
            requestApproved: false
        }).populate('pharmacistDetail', 'name').populate('doctorDetail', 'name').exec(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }
};

//create endpoint for 'api/requests/' for POST
exports.postRequests = function (req, res) {
    console.log("[POST Request] Request");
    if (req.body === null) {
        res.json({
            message: "No data received"
        });
    } else if (JSON.stringify(req.body) === '{}') {
        res.json({
            message: "No data received"
        });
    } else {
        //create new instance of request model
        var request = new Request(req.body);

        request.save(function (err) { //mongoose function
            if (err)
                res.send(err);
            console.log("Request body : " + req.body);
            res.json({
                message: "Request details added to the database",
                data: request
            });
        });
    }
};
//create endpoint for 'api/requests/' for GET
exports.getRequests = function (req, res) {
    console.log("[GET all Request] Request");
    Request.find(function (err, requests) {
        if (err) {
            res.send(err);
        } else {
            res.json(requests);
        }
    });
};
//request get one
// create endpoint for '/requests/:request_id' for GET
exports.getRequest = function (req, res) {
    console.log("[GET Request] Request");
    Request.findOne({
        _id: req.params.request_id
    }, function (err, request) {
        if (err) {
            res.send(err);
        } else {
            console.log("[GET Request]Response:" + JSON.stringify(request));
            res.json({
                message: "success",
                data: request
            });
        }
    });
};
//update specific request, firstName and lastName details
//create endpoint for '/requests/:request_id' for PUT
exports.putRequest = function (req, res) {
    console.log("[PUT Request] Request");
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
        Request.findByIdAndUpdate(req.params.request_id, req.body, {
            new: true
        }, function (err, request) {
            if (err) {
                res.send(err);
            }
            //request = new Request(req.body);
            //request.save(function(err){
            //	if (err)
            //		res.send(err);
            else {
                console.log(request);
                res.json({
                    message: "Request updated to the database",
                    data: request
                });
            }
            //});
        });
    }
};
//deleted the request using id
exports.deleteRequest = function (req, res) {
    console.log("[DELETE Request] Request");
    Request.findByIdAndRemove(req.params.request_id, function (err) {
        if (err)
            res.send(err);
        res.json({
            message: "The request has been removed"
        });
    });
};
