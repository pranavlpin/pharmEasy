var mongoose = require('mongoose');

var patientSchema = new mongoose.Schema({
	"userId": {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
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
		"activeFlag": Boolean,
	}
});

module.exports = mongoose.model('Patient', patientSchema);