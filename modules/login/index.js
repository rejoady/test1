var express = require('express');
var router = express.Router();

var User = require('../../model/user');

router.get("/index", function(req, res){
    console.log(__dirname);

    var instance = new User();
    instance.name =req.query.name;
    instance.save();
    res.render("index",{title:"用户登录"});
})

module.exports = router;