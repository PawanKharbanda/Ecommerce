
var c=[];
c= getstorec();
console.log(c);
var orders=document.getElementById("orders");
function getstorec(){if (!localStorage.c){localStorage.c = JSON.stringify([]); 
}return JSON.parse(localStorage.c); 
}
//var m="Id"+"   "+"Name"+"   "+"Description"+"   "+"Quantity"+"   "+"Price"+"   "+"Email"+"   "+"Date";
//document.getElementById("orders").innerHTML=m;
for (var i = 0; i <c.length; i++) 
{
var m=c[i].id+"   "+c[i].name+"   "+c[i].description+"   "+c[i].quantity+"   "+c[i].price+"   "+c[i].email+"   "+c[i].date;
createpanel(m);
}

function createpanel(m)
{
var div=document.createElement("div");
ul=document.createElement("ul");
li=document.createElement("li");
li.append(m);
ul.append(li);
div.append(ul);
orders.append(div);
}

