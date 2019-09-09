/**
 * 对nodejs请求的封装
 */
const post = require("./post");
const get = require("./get")
const request = {
  post,
  get
}
module.exports = request