var mongoose = require('mongoose');

var pharmacistSchema = new mongoose.Schema({
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
	"others": {
		"addedDate": {
			type: Date,
			default: Date.now
		},
		"addedBy": String,
		"activeFlag": Boolean,
	}
});

module.exports = mongoose.model('Pharmacist', pharmacistSchema);