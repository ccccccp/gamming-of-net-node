
/*
 *根据斗鱼api 顶部tag列表获取频道列表
 */
const get = require("../../utils/get")
const services = require("./services")
/**
 * @params netId     {平台}
 * @params channelId {频道Id}
 * @returns Promise  {response}
 */
module.exports = function(params,callback){
  get(services.getRoomList,
      {},
      {
        urlParams:{
          channelId:params.channelId
        }
      })
  .then((res)=>{
    if(res.data){
      const listData = res.data.map((room)=>{
        return {
          title:`${room.nickname} - ${room.room_name} - ${room.room_id}`,
          value:room.room_id
        }
      })
      callback(null,listData)
    }else{
      callback(null,[])
    }
    
  }).catch((err)=>{
    callback(err,null)
  })
}