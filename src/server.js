const express = require("express");
const cookieParser = require("cookie-parser");
const home = require("./routes/home.js");
const signup = require("./routes/sign-up.js");
const login = require("./routes/log-in.js");
const logout = require("./routes/log-out.js");
const { getSession, removeSession } = require("./model/session.js");

const body = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

const server = express();

// function sessions(req, res, next) {
//     const sid = req.signedCookies.sid;
//     const session = getSession(sid);
//     if (session) {
//       const expiry = new Date(session.expires_at);
//       const today = new Date();
//       if (expiry < today) {
//         removeSession(session.id);
//         res.clearCookie(sid);
//       }
//       req.session = session;
//     }
//     next();
//   }

  server.use((req, res, next) => {
    const time = new Date().toLocaleTimeString("en-GB");
    console.log(`${time} ${req.method} ${req.url}`);
    next();
  });
  server.use(cookies);
  server.use(sessions);

  module.exports = server;