module.exports.withAuth = function(req,res,next){
  console.log("whitauth",req.session,req.method)
  if(!req.session.username){
    return res.json({
      errcode:1,
      data:null,
      message:'未登录'
    })
  }
  next();
}
