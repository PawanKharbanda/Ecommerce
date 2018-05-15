var pro=[];
var flag=0;
var pid=1;
var m=0;
var s=[];
var info=[];
var c=[]
s=sessiongetstoreinfo();
info=getstoreinfo();
c= getstorec();
console.log(c);
var j=-1;

for (var i = 0; i < info.length; i++) 
{
if(info[i].email==s[0].email)
{
j=i;
break;
}
}
console.log(info[j].email);
var divuser=document.getElementById("divuser");
pro=getStoredProducts() ;
for (var i = 0; i < pro.length; i++) 
{
pro[i].id=pid;
var z=pro[i].name+" "+pro[i].description+" "+pro[i].quantity+" "+pro[i].price+" ";

createpanel(z)
pid++;
}
function createpanel(z)
{
var div=document.createElement("div");
div.setAttribute("id",pid);
ul=document.createElement("ul");
li=document.createElement("li");
li.append(z);
ul.append(li);
div.append(ul);
divuser.append(div);
del=document.createElement("button");
delt=document.createTextNode("DELETE");
del.append(delt);
div.append(del);
cart=document.createElement("button");
cart.setAttribute("id","cartid")
ac=document.createTextNode("Add To Cart");
cart.append(ac);
div.append(cart);
del.addEventListener("click", function(event)
{
var parentnode=event.target.parentNode;
var grandparentnode=event.target.parentNode.parentNode;
grandparentnode.removeChild(parentnode);
var selectedid=parseInt(parentnode.id);
var selectedindex=pindex(selectedid);
pro.splice(selectedindex,1);
storeProducts(pro);

});

cart.addEventListener("click", function(event)
{

var parentnode=event.target.parentNode;
var grandparentnode=event.target.parentNode.parentNode;
var selectedid=parseInt(parentnode.id);
var i=pindex(selectedid);
pro[i].email=info[j].email; //assingning username to each product
pro[i].date=Date();
c.push(pro[i]);
storec(c)

grandparentnode.removeChild(parentnode);

}
);

}
function getStoredProducts(){if (!localStorage.products){localStorage.products = JSON.stringify([]); 
}return JSON.parse(localStorage.products); 
}

function storeProducts(pro){localStorage.pro = JSON.stringify(pro);}








function pindex(selectedid)
{
for (var i = 0; i < pro.length; i++) 
	{
        if (pro[i].id ==selectedid) 
		{	return i;

    		}
}
}

function sessiongetstoreinfo(){if (!sessionStorage.info){sessionStorage.info = JSON.stringify([]); 
}return JSON.parse(sessionStorage.s); 
}


function storec(c){localStorage.c= JSON.stringify(c);}



function getstoreinfo(){if (!localStorage.info){localStorage.info = JSON.stringify([]); 
}return JSON.parse(localStorage.info); 
}


function getstorec(){if (!localStorage.c){localStorage.c = JSON.stringify([]); 
}return JSON.parse(localStorage.c); 
}


