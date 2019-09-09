module.exports = function(req,res,next){
  req.session.username = null;
  res.redirect("/")
}