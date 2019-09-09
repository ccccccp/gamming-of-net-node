
/*
 *根据斗鱼api 顶部tag列表获取频道列表
 */
const get = require("../../utils/get")
const services = require("./services")

module.exports = function(params={},callback){
  get(services.header_cate,params).then((res)=>{
    if(res[0] && res[0].list){
      const listData = res[0].list.map((channel)=>{
        return {
          title:channel.name,
          value:channel.tag_id
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