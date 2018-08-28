const express = require('express');
const router  = express.Router();
const Coffee = require("../models/Coffee");
const Book = require("../models/Books");




/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/coffeespots', (req, res) => {
  Coffee.find({}).then(data => {
      res.send(data)
  })
})

module.exports = router;
