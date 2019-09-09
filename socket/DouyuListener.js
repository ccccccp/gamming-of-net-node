const DouyuChatRoom = require("./DouyuChatRoom")
let barrggeServer = null
/**
 * 监听类
 */
class Listener {
  constructor() {
    this.roomServer = {}//已监听的房间{[roomId]:DouyuChatRoom}
    this.clientList = []
  }
  addListenerSocket(client) {
    this.clientList.push(client)
  }
  removeListener(client){
      //删除所有房间监听的这个客户端
      for(var id in this.roomServer){
        this.roomServer[id].removeClient(client)
        if(this.roomServer[id].len === 0){
          this.roomServer[id] = null
          delete this.roomServer[id]
        }
      }
    
  }

  changeListenerId(idList, client) {
    idList.forEach((id) => {
      if (!this.roomServer[id]) {//没有监听此房间
        this.create(id, client)
      }else{//已经在监听，为房间添加监听client
        this.roomServer[id].addClient(client)
      }
    })
  }
  /**
   * 创建监听房间
   * @param {Number} roomId 房间ID
   * @param {Client} client 客户端对象 
   */
  create(roomId, client) {
    const room = new DouyuChatRoom(roomId,client)
    this.roomServer[roomId] = room
    room.on('connect', () => {
      this.onConnect(roomId)
    });
    room.on('error', function (error) {
      console.error('Error: ' + error.toString())
    });
    room.on('close', function (hasError) {
      console.log('DouyuTV ChatRoom #' + roomID + ' disconnected' + hasError ? ' because of error.' : '.');
    });

    // Chat server events
    room.on('chatmsg', function (message) {
      console.log('[' + message.nn + ']: ' + message.txt);
      /**
       * 斗鱼房间收到弹幕，遍历房间保存的客户端，
       * 如果消息匹配到了客户端监听的关键词列表中某一个关键字，发送socket消息到浏览器
       */
      this.listenerClients.forEach((client) => {
        client.keywordList.forEach((str) => {
          if (message.txt.indexOf(str) > -1) {
            client.socket.send('[' + message.nn + ']: ' + message.txt)
          }
        })
      })
    });
    return room.open();
  }
  onConnect(roomId) {
    console.log('DouyuTV ChatRoom #' + roomId + ' connected.');
  }
}
function getSocketServerInstance() {
  return barrggeServer || (barrggeServer = new Listener())
}
module.exports = getSocketServerInstance()