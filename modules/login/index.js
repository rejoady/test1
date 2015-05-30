var express = require('express');
var path = require('path');

var router = express.Router();
var app = express();

app.set('views', path.join(__dirname, 'views'));

router.get("/index", function(req, res){
    console.log(__dirname);
    res.render("index",{title:"用户登录"});
})

module.exports = router;