var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/p').post(function(req, res, next) {
    console.log(req.body.name)
    res.render('index',{title:'Post Express', name:req.body.name})
})

module.exports = router;
