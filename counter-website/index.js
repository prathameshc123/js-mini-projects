// console.log(`hellow`);
// console.log("pizza");
// alert("alert");
// document.getElementById("myh1").textContent="hellow";
// let age=25;
// let price=10.9;
// let cgpa=9.75;
// console.log(`my age is ${age}`);
// console.log(`item price is ${price}`);
// console.log(`my cgpa is ${cgpa}`);

// let fullname=window.prompt("enter you fullname");
// let age= 19;
// let isstudent=true;
// document.getElementById("p1").textContent=`your name is ${fullname}`;
// document.getElementById("p2").textContent=`your age is ${age}`;
// document.getElementById("p3").textContent=`are you enrolled: ${isstudent}`;
// const pi=3.14;
// let area;
// let circum;
// document.getElementById("mybutton").onclick=function(){
//     let radius=document.getElementById("myinp").value;
//     area=Math.pow(radius,2)*pi;
//     circum=2*pi*radius;
//     document.getElementById("h41").textContent+=` ${circum}`;
//     document.getElementById("h42").textContent+=` ${area}`;

// }

let label=document.getElementById("p");
let but1=document.getElementById("b1");
let but2=document.getElementById("b2");
let but3=document.getElementById("b3");
let cnt=0;
label.textContent=cnt;
but1.onclick=function(){
    cnt++;
    label.textContent=cnt;
}
but2.onclick=function(){
    cnt=0;
    label.textContent=cnt;
}
but3.onclick=function(){
    cnt--;
    label.textContent=cnt;
}
