const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');



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