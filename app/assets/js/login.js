import {getQueryString,$} from './util.js'

var dom_login_btn = document.getElementById("login-btn");
var dom_username_input = document.getElementById("username");
var dom_password_input = document.getElementById("password");
var redir = getQueryString("redir");

dom_login_btn.onclick = function(){
  var username = dom_username_input.value
  var password = dom_password_input.value
  login(username,password);
}

function login(username,password){
  if(!username || !password){
    return alert("请检查用户名和密码")
  }

  $.get("/api2/login",{username:username,password:password}).then(function(res){
    if(res.errcode ===0){
      if(redir){
        location.href = redir
      }else{
        window.location.href = window.location.origin
      }
    }
  })
}