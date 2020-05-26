const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

/*
 * This API route is for most basic user authentication only (NO EXTRA DATA)
 */



// @route   POST user/register
// @desc    Register new user
// @access  Public
router.post('/register', (req, res) => {

	// Check Validation TBD


	User.findOne({
			email: req.body.email
		})
		.then((user) => {
			if (user) {
				errors.email =
					'There is already a user associated with this email.';
				return res.status(400).json(errors);
			} else {
				const newUser = new User({
					username: req.body.email,
					fname:req.body.fname,
					lname: req.body.lname,
					job_interest:req.body.job_interest,
					joinedSince: Date.now(),
					email: req.body.email,
					password: req.body.password
				});
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser
							.save()
							.then((user) => res.json(user))
							.catch((err) => console.log(err));
					});
				});
			}
		})
		.catch((err) => console.log(err));
});

// @route   POST user/login
// @desc    Login user / Returns JWT Token
// @access  Public
router.post('/login', (req,res) => {
	const email = req.body.email;
	const password = req.body.password;   
	User.findOne({ email })
		 .then(user => {
			if (!user) {
			   errors.email = "Password Or Username is incorrect";
			   return res.status(404).json(errors);
		   }
		   bcrypt.compare(password, user.password)
				  .then(isMatch => {
					 if (isMatch) {
					   const payload = {
						 id: user._id,
						 name: user.username
					  };
					  jwt.sign(payload, secret, { expiresIn: 36000 },
							  (err, token) => {
								if (err) res.status(500)
								.json({ error: "Error signing token",
									   raw: err }); 
								 res.json({ 
								 success: true,
								 token: `Bearer ${token}` });
					  });      
				} else {
					errors.password = "Password Or Username is incorrect";                        
					res.status(400).json(errors);
		}
	  });
	});
  });

// @route   GET user/current
// @desc    Returns current user logging in
// @access  Private
router.get(
	'/current',
	passport.authenticate('jwt', {
		session: false
	}),
	(req, res) => {
		res.json({
			id: req.user.id,
			username: req.user.username,
			email: req.user.email
		});
	}
);

// @route   DELETE user/delete
// @desc    Deletes user
// @access  Private
router.delete(
	'/delete',
	passport.authenticate('jwt', {
		session: false
	}),
	(req, res) => {
		const id = req.user.id;
		const password = req.body.password;

		bcrypt
			.compare(password, req.user.password)
			.then((isMatch) => {
				if (isMatch) {
					User.findById(id)
						.then((user) =>
							user.remove().then(() =>
								res.json({
									success: true
								})
							)
						)
						.catch((err) =>
							res.status(404).json({
								success: false
							})
						);
				} else {
					errors.password = 'Incorrect Password.';
					return res.status(400).json(errors);
				}
			})
			.catch((err) => console.log(err));
	}
);

module.exports = router;