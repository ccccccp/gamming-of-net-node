class Client{
  constructor(socket,idList,keywordList){
    this.socket = socket
    this.idList = idList
    this.keywordList = keywordList
  }
  setFilter(params){
    const {idList,keywordList} = params
    this.idList = idList
    this.keywordList = keywordList
  }
}
module.exports = Client