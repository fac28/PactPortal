// const { createUser } = require("../model/user.js");
// const { createSession } = require("../model/session.js");
const { Layout } = require("../templates.js");
// const bcrypt = require("bcryptjs");
const signup = require("./routes/sign-up.js");
server.get("/sign-up", signup.get);
module.exports = { get, post };