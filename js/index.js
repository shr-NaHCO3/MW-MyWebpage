window.onload = function(){
    if(localStorage.getItem("#islogin#*") != null){
        if(JSON.parse(localStorage.getItem("#islogin#*"))["islogin"]){
            var name = JSON.parse(localStorage.getItem("#islogin#*"))["name"]
            if(name == "#admin#*")document.getElementById("login").innerHTML = '<p id="username" style="color: purple;margin-top: 5px;margin-left: -90px;font-size: 20px">'+"管理员"+'</p>';
            else document.getElementById("login").innerHTML = '<p id="username" style="color: #000000">'+name+'</p>';
        }
    }
}

function login(){
    var loginFrame='<div id="loginFrame">\
    <p>&nbsp;&nbsp;Welcome | 欢迎</p>\
    <p>&nbsp;&nbsp;用户名：<input type="text" id="login_name" /></p>\
    <p>&nbsp;&nbsp;密码： &nbsp;&nbsp;<input type="password" id="login_password" /></p>\
    <button id="login_ok" onClick="login_s()">确定</button>\
    <button id="login_no" onClick="login_close()">退出</button>\
    </div>'
    document.getElementById("_loginFrame").innerHTML = loginFrame;
    if(!(localStorage.getItem(localStorage.key("#admin#*")))){
        var obj={
            "password":String([(!(![])+!(![![]]))*(!(![])+!(![![]]))+(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))+(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))+!![]+((!(![])+!(![![]]))*(!(![])+!(![![]]))+(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))+(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))*(!(![])+!(![![]]))+!![])-!![]*!![]-!(![])])
        }
        localStorage.setItem("#admin#*",JSON.stringify(obj));
    }
    if(localStorage.getItem(localStorage.key("#islogin#*")) == null){
        var obj={
            islogin:false,
            name:""
        }
        localStorage.setItem("#islogin#*",JSON.stringify(obj));
    }
}
function login_s(){
    var name = document.getElementById("login_name").value;
    var pw = document.getElementById("login_password").value;
    if(!(localStorage.getItem(localStorage.key(name)))){
        alert("用户不存在！")
    }else{
        if(JSON.parse(localStorage.getItem(localStorage.key(name)))["password"] == pw){
            alert("welcome!");
            document.getElementById("loginFrame").innerHTML = '<p id="_loginFrame"></p>';
            
            if(name == "#admin#*")document.getElementById("login").innerHTML = '<p id="username" style="color: purple">'+"管理员"+'</p>';
            else document.getElementById("login").innerHTML = '<p id="username" style="color: #000000">'+name+'</p>';

            var obj={
                islogin:true,
                name:name
            }
            localStorage.setItem("#islogin#*",JSON.stringify(obj));
            location.reload();
        }else{
            alert("密码错误或账号不存在！");
        }
    }
}
function login_close(){
    document.getElementById("_loginFrame").innerHTML = '<p id="_loginFrame"></p>';
    location.reload();
}
function re(){
    var reFrame = '<div id="reFrame">\
    <p>&nbsp;&nbsp;注册</p>\
    <p>&nbsp;&nbsp;用户名：<input type="text" id="re_name" /></p>\
    <p>&nbsp;&nbsp;密码： &nbsp;&nbsp;<input type="password" id="re_password" /></p>\
    <p>&nbsp;&nbsp;确认密码：<input type="password" id="re_password2" /></p>\
    <button id="re_ok" onClick="re_s()">确定</button>\
    <button id="re_no" onClick="re_close()">退出</button>\
    </div>'
}

