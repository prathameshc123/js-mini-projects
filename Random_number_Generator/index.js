
let random1;
let random2;
let random3;
let btn=document.getElementById("bt");
let l1=document.getElementById("l1");
let l2=document.getElementById("l2");
let l3=document.getElementById("l3");
btn.onclick=function(){
     random1=Math.floor(Math.random()*6)+1;
 random2=Math.floor(Math.random()*6)+1;
 random3=Math.floor(Math.random()*6)+1;
    l1.textContent=random1;
    l2.textContent=random2;
    l3.textContent=random3;
}