let obj = {}
let _obj = {}
function addRoom(roomId){
  Object.defineProperty(obj, roomId, {
    enumerable: true,
    configurable: true,
    get(){
      console.log("get-room" + roomId + ":")
      return _obj[roomId]
    },
    set(val){
      console.log("set-room" + roomId + ":",val)
      _obj[roomId] = val
    }
  });
  obj[roomId] = []
}
function addUser(roomId,user){
    //oldUsers.concat(user)//测试concat--fail,不会调用set
    obj[roomId] = obj[roomId].concat(user)
}
addRoom(1000)
addUser(1000,"userA")
