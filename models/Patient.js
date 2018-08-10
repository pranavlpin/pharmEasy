var mongoose = require('mongoose');

var patientSchema = new mongoose.Schema({
	"name": String,
	"email": String,
	"phone": String,
	"address": String,
	"age": Number,
	"gender": String,
	"prescription": [{
		"medicine": [String],
		"dose": [String],
		"prescriptionDate": Date,
		"notes": String,
	}],
	"others": {
		"addedDate": {
			type: Date,
			default: Date.now
		},
		"addedBy": String,
		"activeFlag": Boolean,
	}
});

module.exports = mongoose.model('Patient', patientSchema);