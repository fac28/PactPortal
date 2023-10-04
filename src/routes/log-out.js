const { removeSession } = require('../model/session');
const express = require('express');

//Variables
const router = express.Router();

router.post('/', (req, res) => {
    removeSession(req.session.id);
  res.clearCookie("sid");
  res.redirect("/");
  res.status(500).send("");


});

module.exports = router;
