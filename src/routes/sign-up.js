const { createUser } = require("../model/user.js");
const { createSession } = require("../model/session.js");
const { Layout } = require("../templates.js");
const bcrypt = require("bcryptjs");

module.exports = { get, post };