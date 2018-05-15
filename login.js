var ldiv=document.getElementById("ldiv");
var logindiv=document.getElementById("logindiv");
var info=[];
var s=[];
info=getstoreinfo();
console.log(info);

var le=document.createTextNode("Email ");
logindiv.append(le);
br1();

var lemail=document.createElement("input");
lemail.setAttribute("type","text");
logindiv.append(lemail);
br1();br1();

var lp=document.createTextNode("Password ")
logindiv.append(lp);br1();
var lepass=document.createElement("input");

lepass.setAttribute("type","password");
logindiv.append(lepass);
br1();br1();
var lb=document.createElement("button");
var log=document.createTextNode("Login->");
lb.append(log);
logindiv.append(lb);

br1();br1();br1();br1();
br();br();br();

lb.addEventListener("click", function(event)
{
var pass=lepass.value;
var mail=lemail.value;
var f=0;
var j=-1;
for (var i = 0; i < info.length; i++) 
{
if(info[i].email==mail)
{
j=i;
break;
}
}
if(j==-1)
{
window.alert("Enter Valid Username");
}
else if(info[j].password!=pass)
{
window.alert("Enter Valid Password");
}
else{
s.push(info[j]);
sessionstoreinfo(s);
s=sessiongetstoreinfo();
window.location.href="addproduct.html";
}




});




var n=document.createTextNode("Username ")
ldiv.append(n);
br();
var t0=document.createElement("input");
t0.setAttribute("type","text");
ldiv.append(t0);
br();br();
var e=document.createTextNode("Email ")
ldiv.append(e);
br();
var t1=document.createElement("input");
t1.setAttribute("type","text");
ldiv.append(t1);
br();br();
var m=document.createTextNode("Mobile No. ")
ldiv.append(m);
br();
var t2=document.createElement("input");
t2.setAttribute("type","number");
ldiv.append(t2);
br();br();

var p=document.createTextNode("Password ")
ldiv.append(p);
br();
var t3=document.createElement("input");
t3.setAttribute("type","password");
ldiv.append(t3);
br();br();

var cp=document.createTextNode("Confirm Password ")
ldiv.append(cp);
br();
var t4=document.createElement("input");
t4.setAttribute("type","password");
ldiv.append(t4);
br();br();


var b=document.createElement("button");
var r=document.createTextNode("Register");
b.append(r);
ldiv.append(b);


b.addEventListener("click", function(event)
{
if(t1.value=="" || t2.value=="" || t3.value==""||t0.value==""||t4.value=="")
{ 
window.alert("Fill The details");
}
else
{
var flagupper=0;
var flaglower=0;
var flagspecial=0;
var flagclear=0;
var pass=t3.value;
var cpass=t4.value;
if(pass.length<8)
{window.alert("ENTER atleast 8 Characters in password");}

else
{

for (var i = 0; i < pass.length; i++) 
{

if (pass[i] == pass[i].toUpperCase()) 
{
 var flagupper=1;
}
if (pass[i] == pass[i].toLowerCase())
{
  var flaglower=1;
}
if (pass[i] =="$" || pass[i] =="@"||pass[i] =="%" ||pass[i] =="#"||pass[i] =="*"||pass[i] =="&"||pass[i] =="^")
{
  var flagspecial=1;
}

}

if(flagupper==0)
{
window.alert("ENTER atleast 1 Character in UpperCase");
}
else if(flaglower==0)
{
window.alert("ENTER atleast 1 Character in LowerCase");
}
else if(flagspecial==0)
{
window.alert("ENTER atleast 1 Special Character");
}
else if(cpass!=pass)
{
window.alert("Non Matching password");
}
flagclear=1;
}


if(flagclear==1)
{ 
var objinfo=new Object();
objinfo.name=t0.value;
objinfo.email=t1.value;
objinfo.mobile=t2.value;
objinfo.password=t3.value;
objinfo.confirmpassword=t4.value;
info.push(objinfo);
storeinfo(info);
}
info=getstoreinfo();
console.log(info);
}});

function storeinfo(info){localStorage.info = JSON.stringify(info);}



function getstoreinfo(){if (!localStorage.info){localStorage.info = JSON.stringify([]); 
}return JSON.parse(localStorage.info); 
}






function sessionstoreinfo(s){sessionStorage.s = JSON.stringify(s);}


function sessiongetstoreinfo(){if (!sessionStorage.info){sessionStorage.info = JSON.stringify([]); 
}return JSON.parse(sessionStorage.s); 
}







function br()
{

br1=document.createElement("br");
ldiv.append(br1);
}
function br1()
{

br2=document.createElement("br");
logindiv.append(br2);
}