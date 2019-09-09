
const Signature = require("../libApi/wx/getSignature")
const JsonErr = require("../utils/jsonErr")
module.exports = function(req,res,next){
  const { url } = req.body;
  if(!url){
    return next(new JsonErr(400,'入参url缺失'))
  }
  Signature.getSignature(url).then((params)=>{
    res.json({
      errcode:0,
      data:params
    })
  }).catch((err)=>{
    next(new JsonErr(400,'获取签名失败'))
  })
  
}