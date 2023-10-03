/* eslint-disable no-unused-vars */
const { getUserByEmail } = require('../model/user.js');
const layout = require('../templates/templates.js');
const bcrypt = require('bcryptjs');
const { createSession } = require('../model/session.js');

function get() {}

function post() {}

module.exports = { get, post };
