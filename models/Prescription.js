var mongoose = require('mongoose');

var prescriptionSchema = new mongoose.Schema({
    "patientId": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    "medicines": [String],
    "doses": [String],
    "others": {
        "addedDate": {
            type: Date,
            default: Date.now
        },
        "addedBy": String,
        "activeFlag": Boolean,
    }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);