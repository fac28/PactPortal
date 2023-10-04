/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const home = require('./routes/home.js');
const signup = require('./routes/sign-up.js');
const login = require('./routes/log-in.js');
const logout = require('./routes/log-out.js');

const { getSession, removeSession } = require('./model/session.js');
const body = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

//const templates = require('./templates')



function sessions(req, res, next) {
    const sid = req.signedCookies.sid;
    const session = getSession(sid);
    if (session) {
        const expiry = new Date(session.expires_at);
        const today = new Date();
        if (expiry < today) {
            removeSession(session.id);
            res.clearCookie(sid);
        }
        req.session = session;
    }
    next();
}

//Middleware
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString('en-GB');
    console.log(`${time} ${req.method} ${req.url}`);
    next();
});
app.use(cookies);
app.use(sessions);
app.use(body);
app.use(express.static('public'));
app.use('/sign-up', signup);
app.use('/log-in', login);
app.use('/log-out', logout);

//Routes 

app.get("/", home);
module.exports = app;
