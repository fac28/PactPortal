
/* eslint-disable no-unused-vars */
const { getUserByEmail } = require('../model/user.js');

const { getUserByUsername } = require("../model/user.js");
const { Layout } = require("../templates.js");
const bcrypt = require("bcryptjs");
const { createSession } = require("../model/session.js");

const bcrypt = require('bcryptjs');
const { createSession } = require('../model/session.js');

function get() {}

function post() {}

module.exports = { get, post };
