const douyu = require("douyu")

class DouyuChatRoom extends douyu.ChatRoom{
  get len(){
    return this.listenerClients.length
  }
  constructor(roomId,client){
    super(roomId)
    this.listenerClients = [client]
  }
  addClient(client){
    if(!this.listenerClients.includes(client)){
      this.listenerClients.push(client)
    }
  }
  /**
   * 
   * @param {Client} delClient 要删除的客户端
   */
  removeClient(delClient){
    const i = this.listenerClients.findIndex(client=>client === delClient)
    if(i > -1){
      this.listenerClients[i] = null
      delete this.listenerClients[i]
      this.listenerClients.splice(i,1)
    }
    //这个房间没有网页在过滤
    if(this.listenerClients.length === 0 ){
      this.stopListener()
    }
  }
  /**
   * 停止监听
   */
  stopListener(){
    console.log('停止监听：',this.roomID)
    this.client.s.destroy()
  }
}
module.exports = DouyuChatRoom