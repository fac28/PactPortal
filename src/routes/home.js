const { getUserById } = require('../model/user.js');
const home = require("../templates/home.js");
const express = require('express');

//Variables
const router = express.Router();

router.get('/', (req, res) => {
    try {
        const session = req.session
        if (!session) {
            const homePage = home.home(req, res);
            res.send(homePage);
        } else {
            const user = getUserById(session.user_id)
            const homePage = home.users(req, res, user.isWizard);
            res.send(homePage);
        }

    } catch (error) {
        console.error('Error with route:', error.message);
        throw error;
    }
});

module.exports = router
