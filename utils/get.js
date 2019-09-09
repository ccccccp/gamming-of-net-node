var https = require("https");  
var http = require("http")
var iconv = require("iconv-lite");  
var qs = require("querystring")
const replaceUrlByParams = require("./replaceUrlByParams")

const defaultOption = {
  type:'json'
}
function Get(url="",params={},options={}){
  let urls = url
  const type = options.type || defaultOption.type
  if(Object.keys(params).length > 0){//有参数,拼接字符串
    urls += '?' + qs.stringify(params)
  }
  if(options.urlParams){
    urls = replaceUrlByParams(urls,options.urlParams)
  }
  const protocol = /^https/.test(url)?https:http
  return new Promise((resolve,reject)=>{
    protocol.get(urls, function (res) {  
      var datas = [];  
      var size = 0;  
      res.on('data', function (data) {  
          datas.push(data);  
          size += data.length;
      });  
      res.on("end", function () {  
          var buff = Buffer.concat(datas, size);  
          var result = buff.toString();
          // var result = iconv.decode(buff, "utf8");//转码//var result = buff.toString();//不需要转编码,直接tostring  
          if(type.toLowerCase()=='json'){
            return resolve(JSON.parse(result));
          }
          resolve(result);
      });  
  }).on("error", function (err) {  
    process.stdout.write('第三方接口调用失败:',urls);
    reject(err)  
  });
  })
}
module.exports = Get