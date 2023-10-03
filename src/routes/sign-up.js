const { createUser } = require("../model/user.js");
const { createSession } = require("../model/session.js");
const { Layout, SignUp } = require("../templates.js");
const bcrypt = require("bcryptjs");


const express = require('express')

//Variables
const router = express.Router()
const templates = require('../templates')

router.get("/", (req, res) => {
   try {
   const signUpPage =  templates.SignUp(req,res)
res.send(signUpPage);
} catch (error) {console.error('Error with route:', error.message)
throw error}})


router.post("/", (req, res) => 
{}) 

module.exports = router;