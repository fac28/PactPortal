/* eslint-disable no-unused-vars */
const { createUser } = require('../model/user.js');
const { createSession } = require('../model/session.js');
const { cookieConstant } = require('../constants.js');
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

router.post('/', (req, res) => {
    const { username, password, imageURL, isWizard, bio } = req.body;
    if (!username || !password) {
        res.status(400).send('Bad input');
    } else {
        bcrypt.hash(password, 12).then((hash) => {
            try {
                const user = createUser(
                    username,
                    hash,
                    imageURL,
                    isWizard,
                    bio
                );
                const session_id = createSession(user.id);
                res.cookie('sid', session_id, cookieConstant);

                res.redirect('/');
            } catch (error) {
                if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
                    const signUpPage = SignUp.SignUp(
                        req,
                        res,
                        'Sorry, that username is already taken'
                    );
                    res.send(signUpPage);
                } else {
                    console.error('Error creating user:', error.message);
                    res.status(500).send('Internal Server Error');
                }
            }
        });
    }
});

module.exports = router;
