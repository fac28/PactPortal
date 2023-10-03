const { getUserByEmail } = require("../model/user.js");
const { Layout } = require("../templates.js");
const bcrypt = require("bcryptjs");
const { createSession } = require("../model/session.js");

module.exports = { get, post };