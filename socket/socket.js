const WebSocketServer = require('ws').Server;
// const Ctrl = require("./index")
const Client = require("./Client")
const DouyuListener = require("./DouyuListener");

function openServer() {
  var wss = new WebSocketServer({ port: 702 });
  wss.on('connection', (socket, req) => {
    const client = new Client(socket, [], [])
    DouyuListener.addListenerSocket(client)
    //欢迎提示
    socket.send('欢迎来到聊天室！');
    socket.on("close", (err) => {
      DouyuListener.removeListener(client)
      console.log("socket-close")
    });
    socket.on('message', (res) => {
      const { idList, keywordList } = JSON.parse(res)
      //用户监听关键词变更
      client.setFilter({
        idList,
        keywordList
      })
      //用户监听的房间id变更
      DouyuListener.changeListenerId(idList, client)
      console.log('received: %s', res);
    });
  });

}
openServer()