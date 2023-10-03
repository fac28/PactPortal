/* eslint-disable no-unused-vars */
const { createUser } = require('../model/user.js');
const { createSession } = require('../model/session.js');
const SignUp = require('../templates/sign-up.js');
const bcrypt = require('bcryptjs');

const express = require('express');

//Variables
const router = express.Router();

router.get('/', (req, res) => {
    try {
        const signUpPage = SignUp.SignUp(req, res);
        res.send(signUpPage);
    } catch (error) {
        console.error('Error with route:', error.message);
        throw error;
    }
});

// router.post('/', (req, res) => {
//     const {username, passwprd } = req.body;
//     if (!username || !password) {
//         res.status(400).send("Bad input");
//       } else {
// });

module.exports = router;
