var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
    var randdomval=parseInt(Math.random() * (10 - 1) + 1);
  res.send('[fn] applied to '+randdomval+' is '+Math.log(randdomval));
});

module.exports = router;
