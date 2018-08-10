var mongoose = require('mongoose');

var doctorSchema = new mongoose.Schema({
	"name": String,
	"email": String,
	"phone": String,
	"address": String,
	"age": Number,
	"gender": String,
	"storeDetails": {
		"storeName": String,
		"address": String,
		//other Details
	},
	"others": {
		"addedDate": {
			type: Date,
			default: Date.now
		},
		"addedBy": String,
		"activeFlag": Boolean,
	}
});

module.exports = mongoose.model('Doctor', doctorSchema);