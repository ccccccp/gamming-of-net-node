const mongoose = require("mongoose")
mongoose.connect("mongodb://140.82.48.104:27017/blogs", { useNewUrlParser: true }, function (err) {
  if (err){
    return process.stdout.write("\n数据库连接失败\n")
  }
  process.stdout.write("\n数据库连接成功\n")
})