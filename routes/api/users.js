const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation files
const validateRegInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const db = require("../../models");

// @route // POST api/users/register
router
    .route("/register")
    .post((req, res) => {
        // Form validation using imported validateRegInput function
        const { errors, isValid } = validateRegInput(req.body);

        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        db.User.findOne({ email: req.body.email }, function(err, user) {
            if (user) {
                console.log(user);
                return res.status(400).json({ email: "User with this email already exists." });
            } else {
                const newUser = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                };
                console.log(`this is my New User: ${newUser}`);
                // Hash password with bcrypt before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        db.User.create(newUser)
                            .then(newUser => {
                                console.log(`successfully created new user: ${newUser}`);
                                res.json(newUser)
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    });


// @route // POST api/users/login
router
    .route("/login")
    .post((req, res) => {
        // Form validation using imported validateLoginInput function
        const { errors, isValid } = validateLoginInput(req.body);

        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const email = req.body.email;
        const password = req.body.password;

        // Find user by email
        db.User.findOne({ email }).then(user => {
            // Check if user exists
            if (!user) {
                return res.status(404).json({ emailnotfound: "User with this email not found." });
            }
            // Check password
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    // User matched
                    // Create JWT Payload
                    const payload = {
                        id: user.id,
                        username: user.username
                    };
                    // Sign token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 31556926 // 1 year in seconds
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );
                } else {
                    return res
                        .status(400)
                        .json({ passwordincorrect: "The password you've entered is incorrect." });
                }
            });
        });
    });

module.exports = router;