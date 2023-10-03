const home = require("../templates/home.js");
const express = require('express');

//Variables
const router = express.Router();

router.get('/', (req, res) => {
    try {
        const homePage = home.home(req, res);
        res.send(homePage);
    } catch (error) {
        console.error('Error with route:', error.message);
        throw error;
    }
});

module.exports = router
