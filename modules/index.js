var express = require('express');
var path = require('path');

var router = express.Router();
var app = express();

app.set('views', path.join(__dirname, 'views'));

router.get("/", function(req, res){
    console.log(__dirname);
    res.render("index",{title:"系统首页"});
})

router.get("/index", function(req, res){
    console.log(__dirname);
    res.render("index",{title:"系统首页"});
})

module.exports = router;