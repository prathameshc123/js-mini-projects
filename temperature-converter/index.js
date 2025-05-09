const inp1=document.getElementById("inp1");
const inp2=document.getElementById("inp2");
const inp3=document.getElementById("inp3");
const p1=document.getElementById("p1");

let temp;
function convert(event){
    event.preventDefault();
    const value=Number(inp1.value);
    if(inp2.checked){
        temp=Number(value)*9/5+32;
        temp=temp.toFixed(1);
        p1.innerHTML=`Temperature: ${temp}°F`;
    }
    else if(inp3.checked){
        temp=Number((value-32)*5/9).toFixed(1);
        p1.innerHTML=`Temperature: ${temp}°C`;
    }
    
    else{
        p1.innerHTML="!Select a unit";
    }
}
