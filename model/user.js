var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;

var UserSchema = new Schema({
    name  :{ type:String,default:'Name'}
});
// 覆盖了原有的save方法，不能正常保存数据
//UserSchema.methods.save = function(err) {
//    console.log("保存数据");
//}

var UserModel = mongodb.mongoose.model("User", UserSchema);

UserModel.prototype.checkRegister = function() {
    var err = {};
    if(!this.name || this.name.trim() == '') {
        err.err = "true";
        err.name = "登录名称不能为空";
    }
    return err;
}

module.exports = UserModel;