var express = require('express');
var router = express.Router();

var UserModel = require('../../model/user');

router.get("/", function(req, res){
    res.render("register/index");
})

router.post("/", function(req, res){
    var user = new UserModel();
    user.name = req.body.loginName;
    console.log("提交请求, 用户数据:" + user);
    var err = user.checkRegister();
    console.log("校验用户注册信息结果:", err);
    if ("err" in err) {
        res.render("register/index",err);
    } else {
        user.save();
        res.redirect("/register/success")
    }
})

router.get("/success", function(req, res){
    res.render("register/success");
})

module.exports = router;