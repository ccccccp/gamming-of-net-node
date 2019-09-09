const get = require("../../utils/get")
const appConfig = require("../../app/config")
const qs = require("querystring")
const sha1 = require("./sha1")

class GetSignature {
  constructor() {
    this.jsapi_ticket = ''
    this.access_token = ''
    this.signatureInfo = {}
    this.expires_in = 7200 * 1000
    this.refreshTimer = null
  }
  getTicket(force = false) {
    if (!force && this.jsapi_ticket) {
      return Promise.resolve()
    }
    return get('https://api.weixin.qq.com/cgi-bin/ticket/getticket',
      {
        access_token: this.access_token,
        type: 'jsapi'
      })
      .then((res) => {
        if (res.errcode == 0) {
          this.jsapi_ticket = res.ticket
          console.log("获取ticket成功", res)
          return Promise.resolve()
        } else {
          console.log("获取ticket成结果", res)
          return Promise.resolve()
        }
      }).catch((err) => {
        return Promise.reject(err)
      })

  }
  getAccessToken(force = false) {
    if (!force && this.access_token) {
      return Promise.resolve()
    }
    return get('https://api.weixin.qq.com/cgi-bin/token',
      {
        grant_type: 'client_credential',
        appid: appConfig.appId,
        secret: appConfig.appSecret
      }).then(res => {
        console.log("获取token成功", res)
        const { access_token, expires_in } = res
        this.access_token = access_token
        if(expires_in){
          this.expires_in = expires_in * 1000
          this.refresh(this.expires_in)
        }
        return Promise.resolve()
      }).catch(() => {
        return Promise.reject()
      })
  }
  getSignature(url) {
    const params = {
      noncestr: 'Wm3WZYTPz0wzccnW',
      timestamp: Math.floor(+new Date() / 1000),
      url: url
    }
    // if (this.signatureInfo[url]) {
    //   return Promise.resolve({
    //     url:url,
    //     timestamp:params.timestamp,
    //     noncestr:params.noncestr,
    //     appId:appConfig.appId,
    //     signature:this.signatureInfo[url]
    //   })
    // }
    return this.rangeGetSignature(params)
  }
  rangeGetSignature(params) {
    return this.getAccessToken()
      .then(() => {
        return this.getTicket()
      })
      .then(() => {
        return this.makeSignature(params, this.jsapi_ticket)
      }).then((signature)=>{
        return Promise.resolve({
          url:params.url,
          timestamp:params.timestamp,
          noncestr:params.noncestr,
          appId:appConfig.appId,
          signature:signature
        })
      })
  }
  makeSignature(params, ticket) {
    const param = {
      jsapi_ticket: ticket,
      noncestr: params.noncestr,
      timestamp: params.timestamp,
      url: params.url
    }
    const str = decodeURIComponent(qs.stringify(param))
    console.log(str)
    const signature = sha1(str)
    console.log(signature)
    this.signatureInfo[params.url] = signature
    return Promise.resolve(signature)
  }
  refresh(time) {
    if(this.refreshTimer){
      clearTimeout(this.refreshTimer)
    }
    this.refreshTimer = setTimeout(() => {
      this.getAccessToken(true)
        .then(() => {
          this.getTicket(true)
        })
    }, time || 0)

  }
}
module.exports = new GetSignature()