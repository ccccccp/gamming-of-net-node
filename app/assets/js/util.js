

export function getQueryString(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
}
export const $ = {
  get: function (url, params = {}, options = {}) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      var paramsString = getParamsString(params);
      //xhr.open("GET","/api2/login?username=" + username + "&password=" + password)
      xhr.open("GET",url + paramsString);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var res = xhr.responseText;
            if (typeof res === 'string') {
              res = JSON.parse(res)
              resolve(res);
            }
          }else{
            reject(xhr)
          }
        }
      }
    })

  }
}
function getParamsString(paramsObj) {
  if (Object.keys(paramsObj).length === 0) {
    return ''
  }
  return Object.keys(paramsObj).reduce(function (total, item) {
    return total + item + "=" + paramsObj[item] + "&"
  }, "?").slice(0, -1)
}