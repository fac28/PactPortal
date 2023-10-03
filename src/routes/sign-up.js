const { createUser } = require("../model/user.js");
const { createSession } = require("../model/session.js");
const { Layout, SignUp } = require("../templates.js");
const bcrypt = require("bcryptjs");


const express = require('express')

//Variables
const router = express.Router()
const templates = require('../templates')

router.get("/", (req, res) => {
   const signUpPage =  SignUp();
res.send(signUpPage);
} )


function post() {
    
}

module.exports = { get, post };