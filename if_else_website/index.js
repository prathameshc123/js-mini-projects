const inp1 =document.getElementById("inp1");
const inp2 =document.getElementById("inp2");
const inp3 =document.getElementById("inp3");
const inp4 =document.getElementById("inp4");
const btn1 =document.getElementById("btn1");
const p1 =document.getElementById("p1");
const p2 =document.getElementById("p2");
btn1.onclick=function(){
    if(inp1.checked){
        p1.textContent=`You have subsribed successfully!`;
    }
    else{
        p1.textContent=`You haven't subsribed yet!`;
    }
    if(inp2.checked){
        p2.textContent=`You are paying with Visa`;
    }else if(inp3.checked){
        p2.textContent=`You are paying with MasterCard`;
    }else if(inp4.checked){
        p2.textContent=`You are paying with PayPal`;
    }else{
        p2.textContent=`Select a payment method to proceed!`
    }
}

