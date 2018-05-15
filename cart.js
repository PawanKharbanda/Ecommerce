var divcart=document.getElementById("divcart");
var pid=1;
var c=[];
var s=[];
s=sessiongetstoreinfo();
info=getstoreinfo();
c=getstorec();
console.log(c);
var j;
for (var i = 0; i < info.length; i++) 
{
if(info[i].email==s[0].email)
{
j=i;
break;
}
}
console.log(j);
for (var i = 0; i <c.length; i++) 
{
if(info[j].email==c[i].email)
{var m=c[i].name+" "+c[i].description+" "+c[i].quantity+" "+c[i].price+" ";
createpanel(m)
pid++;}
}
function createpanel(m)
{
var div=document.createElement("div");
div.setAttribute("id",pid);
ul=document.createElement("ul");
li=document.createElement("li");
li.append(m);
ul.append(li);
div.append(ul);
divcart.append(div);
}

function sessiongetstoreinfo(){if (!sessionStorage.info){sessionStorage.info = JSON.stringify([]); 
}return JSON.parse(sessionStorage.s); 
}


function storeinfo(info){localStorage.info = JSON.stringify(info);}



function getstoreinfo(){if (!localStorage.info){localStorage.info = JSON.stringify([]); 
}return JSON.parse(localStorage.info); 
}

function getstorec(){if (!localStorage.c){localStorage.c= JSON.stringify([]); 
}return JSON.parse(localStorage.c); 
}




