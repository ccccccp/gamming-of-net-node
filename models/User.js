
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const MODEL = 'users'
const UserSchema = new mongoose.Schema({
  username:String,
  password:String,
  salt:String
})
/**
 * 检测用户是否存在
 */
UserSchema.methods.checkHasUser = function(fn){
  const {username} = this;
  this.model(MODEL).findOne({username}, function (err,item) {
    if(err){
      return fn(err)
    }
    if(item){
      return fn(null,true)
    }
    return fn(null,false)
  })
}
/**
 * 保存用户
 */
UserSchema.methods.saveUser = function(fn){
  const user = this
  if(!user.username || !user.password){
    return fn(new Error("用户名或密码为空"))
  }
  this.hashPassword(function(err){
    if (err) {
      return fn(err)
    }
    user.save(function (err, doc) {
      if (err) {
        return fn(err)
      }
      fn(null,doc)
    })
  })
}

/**
 * 加密密码
 */
UserSchema.methods.hashPassword = function(fn){
  let user = this
  bcrypt.genSalt(12,function(err,salt){
    if(err) return fn(err)
    user.salt = salt
    bcrypt.hash(user.password,salt,function(err,hash){
      if(err) return fn(err)
      user.password = hash
      fn()
    })
  })
}

/**
 * 认证用户名密码
 */
UserSchema.methods.authenticate = function(fn){
  const {username,password} = this
  //先根据用户名拿到hash密码和盐，再加密对比
  this.model(MODEL).findOne({username},function(err,doc){
    if(err){ return fn(err) }
    if(!doc){return fn(new Error("没有该用户"))}
    const { salt,password:docPass } = doc
    bcrypt.hash(password,salt,function(err,hash){
      if(err) return fn(err)
      if(hash !== docPass){
        return fn(new Error("密码错误"))
      }
      fn(null,doc)
    })
  })
}
module.exports = mongoose.model(MODEL,UserSchema)