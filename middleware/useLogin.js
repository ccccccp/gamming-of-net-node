const JsonErr = require("../utils/jsonErr")
const urlParse = require("url").parse; 


module.exports = function(req,res,next){
  if(!req.session){
    return next(new MyError(401,"没有权限"))
  }
  console.log(urlParse(req.originalUrl),req.headers['content-type'])
  const redirPath = encodeURIComponent(urlParse(req.originalUrl).href)
  if(!req.session.userInfo){
    const type = req.headers['content-type'];
    if(/application\/json/.test(type)){
      return next(new JsonErr(401,'没有权限'))
    }
    return res.redirect("/login?redir=" + redirPath)
  }
  next()
}