class JsonErr extends Error{
  constructor(errcode,message){
    super(message)
    this.errcode = errcode 
  }
}
module.exports = JsonErr