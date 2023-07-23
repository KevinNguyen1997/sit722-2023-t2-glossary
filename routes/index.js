var express = require('express');
const { glosarries } = require("../glossary");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SIT722 Software Deployment and Operation',
    glossaries: glosarries,
  });
});

module.exports = router;

