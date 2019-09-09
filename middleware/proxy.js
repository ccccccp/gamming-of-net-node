const proxy = require('http-proxy-middleware');
const {withAuth} = require("./withAuth");
module.exports = function useProxy(app){
  // app.use('/api',withAuth,proxy({ target: 'http://140.82.48.104:8082', changeOrigin: true }));//接口需要验证登录
  app.use('/api',proxy({ target: 'http://140.82.48.104:8082', changeOrigin: true }));
}