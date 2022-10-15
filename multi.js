var f1=document.getElementById("form1");
var f2=document.getElementById("form2");
var f3=document.getElementById("form3");

var n_2=document.getElementById("next-2");
var b_1=document.getElementById("back-1");
var n_3=document.getElementById("next-3");
var b_2=document.getElementById("back-2");
var Details=[];
var u=document.getElementById("username");
var p=document.getElementById("pass");
var L=document.getElementById("link");
var G=document.getElementById("git");
var LE=document.getElementById("leet");
var s=document.getElementById("sbt");
var mail=document.getElementById("mail");
var id=document.getElementById("id");
n_2.addEventListener('click',function(){
    f1.style.left="-450px";
    f2.style.left="40px";
    Details.push(u.value);
    Details.push(p.value);
   
});
b_1.addEventListener('click',function(){
    f2.style.left="450px";
    f1.style.left="40px";
    console.log("back is pressed");
    Details=Details.filter(item => item!==u.value);
    Details=Details.filter(item => item!==p.value);
    

});
n_3.addEventListener('click',function(){
    f2.style.left="450px";
    f3.style.left="40px";
    Details.push(L.value);
    Details.push(G.value);
    Details.push(LE.value);
    
    
})
b_2.addEventListener('click',function(){
    f3.style.left="450px";
    f2.style.left="40px";
    Details=Details.filter(item => item!==L.value);
    Details=Details.filter(item => item!==G.value);
    Details=Details.filter(item => item!==LE.value);
   
})
s.addEventListener('click',function(){
    Details.push(mail.value);
    Details.push(id.value);
    for(var i=0;i<Details.length;i++){
        console.log(Details[i]);
    }
})