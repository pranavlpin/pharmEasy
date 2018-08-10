var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//User schema
var userSchema = new mongoose.Schema({
	username: {
		type: String,
		//unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	access: { //3-Patient, 4-Doctor, 5-Pharmacist
		type: Number,
		required: true,
		default: 5,
	},
	addedDate: {
		type: Date,
		default: Date.now
	},
});

//Execute before each user.save() call
userSchema.pre('save', function (callback) {
	var user = this;
	console.log(JSON.stringify(user) + " " + user.isModified('password'));
	//Break out if the password hasnt changed
	if (!user.isModified('password')) return callback();

	//Password changed so we need to hash it
	bcrypt.genSalt(5, function (err, salt) {
		if (err) return callback(err);
		bcrypt.hash(user.password, salt, null, function (err, hash) {
			if (err) return callback(err);
			user.password = hash;
			callback();
		});
	});
});

userSchema.methods.verifyPassword = function (password, callback) {
	bcrypt.compare(password, this.password, function (err, isMatch) {
		if (err)
			return callback(err);
		callback(null, isMatch);
	});
};
//Export the Mongoose model
module.exports = mongoose.model('User', userSchema);