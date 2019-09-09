module.exports = function(req,res,next){
  const {username,password} = req.body;
  if(username === 'admin' && password === '7594368'){
    req.session.username = username;
    return res.json({
      message:'登录成功',
      errcode:0
    })
  }
  return res.json({
    message:'请检查用户名和密码是否正确',
    errcode:1
  })
}