
const douyu_getRoomList = require("../libApi/douyu/getRoomList");
const JsonErr = require("../utils/jsonErr")
module.exports = function(req,res,next){
  const { netId,channelId } = req.body;
  if(netId === 'douyu'){
    douyu_getRoomList({channelId},function(err,data){
      if(err){
        return next(new JsonErr(500,'获取斗鱼房间列表失败'))
      }
      res.json({
        errcode:0,
        data:{
          list:data
        }
      })
    })
  }else{
    next(new JsonErr(400,'暂不支持获取其他平台频道！'))
  }
  
}