var User = require('../models/User');
var bcrypt = require('bcrypt-nodejs');
//var bases = require('bases');

//create endpoints /api/users for POST
exports.postUsers = function (req, res) { //validation for duplicate
	if (req.body === null) {
		console.log("[POST users NULL] request: " + JSON.stringify(req.body));
		res.json({
			message: "No data received"
		});
	} else if (JSON.stringify(req.body) === '{}') {
		console.log("[POST users NO DATA] request: " + JSON.stringify(req.body));
		res.json({
			message: "No data received"
		});
	} else {
		console.log("[POST users] request: " + JSON.stringify(req.body));
		if (req.body.password == null) {
			req.body.password = "abcd";
		}
		var user = new User({
			username: req.body.username,
			password: req.body.password,
			access: parseFloat(req.body.access),
		});
		//If not sign up using Google and FB, then request has null in gender
		user.save(function (err) {
			if (err) {
				console.log("ERROR post user(user.save): " + err + " " + req.body.password);
				res.send(err);
			} else {
				res.json({
					message: 'New user added'
				})
			};
		});
	}
};
//create endpoints /api/users for GET
exports.getUsers = function (req, res) {
	var d = new Date(Date.now());
	var hour = d.getHours();
	var min = d.getMinutes();
	var month = d.getMonth();
	var year = d.getFullYear();
	var sec = d.getSeconds();
	var day = d.getDate();
	var numDays = 10;
	numDays = req.body.numDays;
	User.find({}, null, {
		sort: '-addedDate'
	}, function (err, users) {
		if (err)
			res.send(err);
		res.json(users);
	});
};
//create endpoints /api/users/:user_id for GET
exports.getUser = function (req, res) {
	User.findOne({
		_id: req.params.user_id
	}, function (err, user) {
		if (err)
			res.send(err);
		res.json(user);
	});
};
//create endpoints /api/users/:user_id for Delete
exports.deleteUser = function (req, res) {
	User.findByIdAndRemove(req.params.user_id, function (err) {
		if (err)
			res.send(err);
		res.json({
			message: "The user has been removed"
		});
	});
};



//create endpoints /api/dashUsers for GET
exports.getDashUsers = function (req, res) {
	Consumer.find({}, null, {}, function (err, consumers) {
		if (err) {
			res.send(err);
		} else if (consumers.length > 0) {
			console.log("Consumers without Users");
			consumers.forEach(function (consumer, index) {
				User.findOne({
					_id: consumer.userId
				}, function (err, user) {
					if (user == null) {
						console.log(consumer._id + consumer.name); //User.findByIdAndRemove(user._id);
					}
				});
				//console.log(user._id);
				//console.log(users[index][0]+"\n"+index+"\n"+users[index][1]);
			});
		}
		res.json(consumers);
	});
};