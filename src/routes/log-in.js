const LogIn = require("../templates/log-in.js");
const bcrypt = require("bcryptjs");
const express = require("express");

const { getUserByUsername } = require("../model/user.js");
const { createSession } = require("../model/session.js");


//Variables
const router = express.Router();


router.get("/", (req, res) => {
    try {
        const logInPage = LogIn.LogIn(req, res)
        res.send(logInPage);
    } catch (error) {
        console.error('Error with route:', error.message)
        throw error
    }
})

router.post("/", (req, res) => {
    const { username, password } = req.body;
    const user = getUserByUsername(username);
    if (!username || !password || !user) {
        return res.status(400).send("<h1>Login failed</h1>");
    }
    bcrypt.compare(password, user.hash).then((match) => {
        if (!match) {
            return res.status(400).send("<h1>Login failed</h1>");
        } else {
            const session_id = createSession(user.id);
            res.cookie("sid", session_id, {
                signed: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                sameSite: 'lax',
                httpOnly: true,
            });
            res.redirect(`/`);
        }
    });
});

module.exports = router;