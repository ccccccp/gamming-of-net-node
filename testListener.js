/**
 * 弹幕监听控制器
 * 监听关键字列表
 * 监听房间列表
 */
let i = 0
class BarrageCtrl{
  constructor(){
    this.keywordList = []//['666','777']
    this.idListener = {}
    //idListener:{1000:[userA,userB]}
    Object.defineProperty(this.idListener, "", {
      enumerable: false,
      configurable: true,
      set(value){
        console.log("set:",value)
        this._idListener[value] = 1+(i++)
        return this._idListener
      },
      get(value){
        console.log("get")
        return this._idListener
      }
    });
  }

  onChangeListener(socket,params){//websocket用户连接，发送监听条件
    const filter = typeof params === 'string'?JSON.parse(params):params
    const {
      idList=[],
      keywordList=[]
    } = filter
    idList.forEach((id)=>{
      if(!this.idListener[id]){//全局没有监听这个room
        Object.defineProperty(this.idListener, id, {
          enumerable: true,
          configurable: true,
          set(value){
            console.log("set-room-"+id+":",value)
            this.idListener[id] = value
            return this.idListener[id]
          },
          get(value){
            console.log("get-room" + id + ":")
            return this.idListener[id]
          }
        });
      }else{//全局在监听这个room
        if(this.idListener[id].indexOf(socket) === -1){//没有这个用户
          this.idListener[id].push(socket)
        }
      }
    })
    // this.idListener[socket] = 11
    // console.log(this.idListener)
    // this.idListener = 'userA'
    // this.idListener = 'userB'
    // console.log(this.idListener['userA'])
  }
  addId(id){//添加待监听的房间id

  }
}
const ctrl = new BarrageCtrl();
ctrl.onChangeListener('aa',{idList:[111],keywordList:['666']})