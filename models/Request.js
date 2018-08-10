var mongoose = require('mongoose');

var requestSchema = new mongoose.Schema({
	patientDetail: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Patient"
	},
	doctorDetail: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Doctor"
	},
	pharmacistDetail: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Pharmacist"
	},
	"requestFrom": String, //doctor or pharmacist
	"requestApproved": {
		type: Boolean,
		default: false
	},
	"others": {
		"addedDate": {
			type: Date,
			default: Date.now
		},
		"activeFlag": Boolean,
	}
});

module.exports = mongoose.model('Request', requestSchema);