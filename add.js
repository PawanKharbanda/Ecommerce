var products=[];
var flag=0;
var pid=1;
var divform=document.getElementById("divform");
var divlist=document.getElementById("divlist");
var a=document.getElementById("add");

products=getStoredProducts()

for (var i = 0; i < products.length; i++) 
{
products[i].id=pid;
var s=products[i].name+" "+products[i].description+" "+products[i].quantity+" "+products[i].price;
createlist(s);
pid++;
}
function createlist(s)
{
div=document.createElement("div");
div.setAttribute("id",pid);
divlist.append(div);
ul=document.createElement("ul");
li=document.createElement("li");
li.append(s);
ul.append(li);
div.append(ul);
del=document.createElement("button");
delt=document.createTextNode("DELETE");
del.append(delt);
div.append(del);

edit=document.createElement("button");
e=document.createTextNode("EDIT");
edit.append(e);
div.append(edit);
del.addEventListener("click", function(event)
{
var parentnode=event.target.parentNode;
var grandparentnode=event.target.parentNode.parentNode;
grandparentnode.removeChild(parentnode);
var selectedid=parseInt(parentnode.id);
var selectedindex=pindex(selectedid);
products.splice(selectedindex,1);
storeProducts(products);
	console.log(products);

});
edit.addEventListener("click", function(event)
{
if(flag==0)
{var parentnode=event.target.parentNode;
var grandparentnode=event.target.parentNode.parentNode;
var selectedid=parseInt(parentnode.id);
var i=pindex(selectedid);
var ob=products[i];
products.splice(i,1);
storeProducts(products);
grandparentnode.removeChild(parentnode);
createpanel(ob);
flag=1;
}
}
);
}
function createpanel(ob)
{
a.style.visibility="hidden";
//event.preventDefault();
var f=document.createElement("form");
f.setAttribute("method","post");
divform.append(f);

var p=document.createTextNode("Product Name:-")
divform.append(p);
var t1=document.createElement("input");
t1.setAttribute("type","text");
t1.setAttribute("id","t1");
divform.append(t1);
br();br();
if(ob!=null)
{
t1.defaultValue=ob.name;
}




var d=document.createTextNode("Description:-")
divform.append(d);
var t2=document.createElement("textarea");
t2.setAttribute("id","t2");
if(ob!=null)
{
t2.defaultValue=ob.description;
}
divform.append(t2);
br();br();





var q=document.createTextNode("Quantity");
divform.append(q);
var t3=document.createElement("input");
t3.setAttribute("type","number");
t3.setAttribute("id","t3");
if(ob!=null)
{
t3.defaultValue=ob.quantity;
}

divform.append(t3);
br();br();



 var p=document.createTextNode("price");
divform.append(p);
var t4=document.createElement("input");
t4.setAttribute("type","number");
t4.setAttribute("id","t4");
if(ob!=null)
{
t4.defaultValue=ob.price;
}
divform.append(t4);
br();br();
var b=document.createElement("button");
var s=document.createTextNode("Submit");
b.append(s);
b.setAttribute("type","submit");
divform.append(b);
br();br();




b.addEventListener("click", function(event)
{
if(t1.value=="" || t2.value=="" || t3.value==""||t4.value=="")
{ 
window.alert("Fill The details");
return false;
}
else
{

var childNodes = divform.childNodes;
   for (var i = 0; childNodes.length > 0;) 
   {
     divform.removeChild(childNodes[i]);
   }
flag=0;

a.style.visibility="visible";
var s=t1.value+"           "+t2.value+"       " +t3.value+"       "+t4.value ;
createlist(s);
var objproduct=new Object();
objproduct.id=pid;
objproduct.name=t1.value;
objproduct.description=t2.value;
objproduct.quantity=t3.value;
objproduct.price=t4.value;
products.push(objproduct);
storeProducts(products);
pid++;

}


}
);

}


function br()
{

br1=document.createElement("br");
divform.append(br1);
}

function pindex(selectedid)
{
for (var i = 0; i < products.length; i++) 
	{
        if (products[i].id ==selectedid) 
		{	return i;

    		}
}
}
a.addEventListener("click", function(event)
{
createpanel(null);

}
);

function addtoarray()
{
var objproduct=new Object();
objproduct.id=pid;
objproduct.name=document.getElementById("t1").value;
objproduct.description=document.getElementById("t2").value;
objproduct.quantity=document.getElementById("t3").value;
objproduct.price=document.getElementById("t4").value;
products.push(objproduct);

}

function storeProducts(products){localStorage.products = JSON.stringify(products);}



function getStoredProducts(){if (!localStorage.products){localStorage.products = JSON.stringify([]); 
}return JSON.parse(localStorage.products); 
}

