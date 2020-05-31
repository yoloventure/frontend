const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
/*
 * This API route is for most basic user authentication only (NO EXTRA DATA)
 */


// @route   POST auth/register
// @desc    Register new user
// @access  Public
router.post('/register', (req, res) => {

	// Check Validation TBD
	var errors;

	// Grab the "Authorization" header.
	var auth = req.get("authorization");

	if (!auth) {
		res.set("WWW-Authenticate", "Basic realm=\"Authorization Required\"");
		return res.status(401).send("Authorization Required");
	} else {
		var credentials = Buffer.from(auth.split(" ").pop(), "base64").toString("ascii").split(":");
		const userEmail = credentials[0];
		const userPassword = credentials[1];

		User.findOne({
			email: userEmail
		})
			.then((user) => {
				if (user) {
					errors =
						'There is already a user associated with this email.';
					return res.status(400).json({
						success: false,
						error: errors
					});
				} else {
					const newUser = new User({
						username: userEmail,
						fname: req.body.fname,
						lname: req.body.lname,
						job_interest: req.body.job_interest,
						joinedSince: Date.now(),
						email: req.body.email,
						password: userPassword
					});
					bcrypt.genSalt(10, (err, salt) => {
						bcrypt.hash(newUser.password, salt, (err, hash) => {
							if (err) throw err;
							newUser.password = hash;
							newUser
								.save()
								.then((user) => res.status(200).json({
									success: true,
									message: "User successfully registered"
								}))
								.catch((err) => console.log(err));
						});
					});
				}
			})
			.catch((err) => console.log(err));
	}
});

// @route   POST auth/login
// @desc    Login user / Returns JWT Token
// @access  Public
router.post('/login', (req, res) => {
	var errors;
	const secret = process.env.JWT_SECRET || "secret"

	var auth = req.get("authorization");

	if (!auth) {
		res.set("WWW-Authenticate", "Basic realm=\"Authorization Required\"");
		return res.status(401).send("Authorization Required");
	} else {
		var credentials = Buffer.from(auth.split(" ").pop(), "base64").toString("ascii").split(":");

		const email = credentials[0];
		const password = credentials[1];
		User.findOne({ email })
			.then(user => {
				if (!user) {
					errors = "Password Or Username is incorrect";
					return res.status(401).json({
						success: false,
						error: errors
					});
				}
				bcrypt.compare(password, user.password)
					.then(isMatch => {
						if (isMatch) {
							const payload = {
								id: user._id,
								username: user.username
							};
							jwt.sign(payload, secret, { expiresIn: 36000 },
								(err, token) => {
									if (err) res.status(500)
										.json({
											error: "Error signing token",
											raw: err
										});
									res.json({
										success: true,
										token: `Bearer ${token}`
									});
								});
						} else {
							errors = "Password Or Username is incorrect";
							res.status(401).json({
								success: false,
								error: errors
							});
						}
					});
			});
	}
});

//@Route: Logout
router.get('/logout', (req, res) => {
	res.send("Logged out");
});

module.exports = router;
