const development = require("./development")
const production = require("./production")
module.exports = function setConfig(app){

  const env = process.env.NODE_ENV || 'development'

  app.set("env",env)
  app.set("views","./app/views")
  app.set("view engine","ejs")
  console.log("环境：",env)
  if(env === 'development'){
    app.set("PORT",development.PORT)
    return
  }
  app.set("PORT",production.PORT)
  
}