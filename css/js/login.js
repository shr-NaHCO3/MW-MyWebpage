/**********
some thongs in localStorages:
1.#admin#*:
	admin
	can change users informations
	
2.#islogin#*:
	who is login and its name.

**********/

window.onload = function(){
    if(localStorage.getItem("#islogin#*") != null){
        if(JSON.parse(localStorage.getItem("#islogin#*"))["islogin"]){
            var name = JSON.parse(localStorage.getItem("#islogin#*"))["name"];
			var usersFramePrefix = "信誉"; //信誉值前缀
			var usersFrame = '<li id="username">\
				<p>'+name+'</p>\
				<ul>\
					<li>\
						<p id="prestige" style="font-size:17px">信誉:0</p>\
					</li>\
					<li>\
						<button onClick="unLogin()">登出</button>\
					</li>\
				</ul>\
			</li>' //用户操作框架
			var adminFrame = '<li id="username">\
				<p>管理员</p>\
				<ul>\
					<li>\
						<p id="prestige" style="font-size:17px">信誉:32767</p>\
					</li>\
					<li>\
						<a href="tq"><p>特权</p></a>\
					</li>\
					<li>\
						<button onClick="unLogin()">登出</button>\
					</li>\
				</ul>\
			</li>' //admin操作框架
			
            if(name == "#admin#*"){
				document.getElementById("login").innerHTML = adminFrame;
			}
            else{
				var userPrestidge = JSON.parse(localStorage.getItem("#islogin#*"))["prestige"]
				document.getElementById("login").innerHTML = usersFrame;
				document.getElementById("prestige").innerText = usersFramePrefix + " : " + userPrestidge
			}
            document.getElementById("re").innerHTML = '<p></p>'
        }
    }
}

function login(){//login frame
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
            name:"",
			prestige:null
        }
        localStorage.setItem("#islogin#*",JSON.stringify(obj));
    }
}
function login_s(){ //login frame
    var name = document.getElementById("login_name").value;
    var pw = document.getElementById("login_password").value;
    if(!(localStorage.getItem(localStorage.key(name)))){
        alert("用户不存在！")
    }else{
        if(JSON.parse(localStorage.getItem(name))["password"] == pw){
            alert("welcome!");
            document.getElementById("loginFrame").innerHTML = '<p id="_loginFrame"></p>';
            
            if(name == "#admin#*")document.getElementById("login").innerHTML = '<p id="username" style="color: purple">'+"管理员"+'</p>';
            else document.getElementById("login").innerHTML = '<p id="username" style="color: #000000">'+name+'</p>';
			
			var prestige = JSON.parse(localStorage.getItem(name))["prestige"]
			
			//////////////////////////////////////////
            var obj={
                islogin:true,
                name:name,
				prestige:prestige
            }
			//////////////////////////////////////////
			
            localStorage.setItem("#islogin#*",JSON.stringify(obj));
            location.reload();
        }else{
            alert("密码错误或账号不存在！");
        }
    }
}
function login_close(){ //close the login frame
    document.getElementById("_loginFrame").innerHTML = '<p id="_loginFrame"></p>';
    location.reload();//刷新
}

function re(){
    var reFrame = '<div id="reFrame">\
    <p>&nbsp;&nbsp;注册</p>\
    <p>&nbsp;&nbsp;用户名：<input type="text" id="re_name" /></p>\
    <p>&nbsp;&nbsp;密码： &nbsp;&nbsp;<input type="password" id="re_password" /></p>\
    <p>&nbsp;&nbsp;确认密码：<input type="password" id="re_password2" /></p>\
    <p id="re_ts" style="color:green;">登录</p>\
    <button id="re_ok" onClick="re_s()">确定</button>\
    <button id="re_no" onClick="re_close()">退出</button>\
    </div>';
    document.getElementById("_reFrame").innerHTML = reFrame;
}
function re_close(){ //close the reload frame
    document.getElementById("_reFrame").innerHTML = '<p id="_reFrame"></p>';
    location.reload(); //刷新
}
function re_s(){ //注册
    var newUserName = document.getElementById("re_name").value;
    var newUserLock = document.getElementById("re_password").value;
    var newUserDoubleLock = document.getElementById("re_password2").value;

    var ts = document.getElementById("re_ts");

    if(newUserName == ""){
        ts.innerHTML = '<p id="re_ts" style="color:red;">用户名不能为空！</p>';
        return ;
    }
    for(var i=0;i<localStorage.length;i++){
        if(localStorage.key(i) == newUserName){
            ts.innerHTML = '<p id="re_ts" style="color:red;">用户已存在！</p>';
            return ;
        }
    }
    if(newUserName.slice(0,1) == "#" || newUserName.slice(-2) == "#*" ){
        ts.innerHTML = '<p id="re_ts" style="color:red;">禁止注册一个控制单元级别的用户！</p>';
        return ;
    }
    if(newUserLock == ""){
        ts.innerHTML = '<p id="re_ts" style="color:red;">宁的密码哪去了呢？</p>';
        return ;
    }
    if(newUserLock != newUserDoubleLock){
        ts.innerHTML = '<p id="re_ts" style="color:red;">您的密码前后不一致哦！</p>';
        return ;
    }
    ts.innerHTML = '<p id="re_ts" style="color:green;">正在注册...</p>';
	
	//////////////////////////////////////////
    var obj = {
        "password":newUserLock,
		"prestige":0 //声望
    }
	//////////////////////////////////////////
	
    localStorage.setItem(newUserName,JSON.stringify(obj));
    ts.innerHTML = '<p id="re_ts" style="color:green;">注册成功！</p>';
}

function unLogin(){ //登出
    var obj={
        islogin:false,
        name:""
    }
    localStorage.setItem("#islogin#*",JSON.stringify(obj));
    location.reload();
}