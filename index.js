const express = require("express")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const bodyParser = require("body-parser")
const setConfig = require("./config")
const routes = require("./routes")
const apiRouter = require("./api")

require("./socket/socket")

const {
  logger
} = require("./middleware/index")

const app = express()
const secret = 'live.codediy.club'

setConfig(app)



app.use(logger)
app.use(cookieParser(secret))

app.use(session({
  name: 'live-session',
  secret,
  rolling: true,
  cookie: { maxAge: 60 * 1000 * 10 },
  saveUninitialized: true,
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

//接口
app.use("/api",apiRouter)



// 错误处理
app.use(function (err, req, res, next) {
  console.error(err.stack);
  return res.status(200).json({//接口错误
    message: err.message || '处理失败',
    errcode: err.errorcode || 9999
  })
})

app.listen(app.get("PORT"), function (err) {
  err && console.log(err);
  console.log("server running in 127.0.0.1:" + app.get("PORT"))
})

