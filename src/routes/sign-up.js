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
        const signUpPage = UserProfile.SignUp(req, res);
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
            const user = createUser(username, hash, imageURL, isWizard, bio);
            const session_id = createSession(user.id);
            res.cookie('sid', session_id, {
                signed: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                sameSite: 'lax',
                httpOnly: true,
            });
            // if (user.isWizard) {
            //     res.redirect(`/demons`);
            // } else {
            //     res.redirect(`/wizards`);
            // }

            res.redirect('/');
        });
    }
});

module.exports = router;
