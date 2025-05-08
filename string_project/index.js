let username=window.prompt("enter your name");
username=username.trim();

username=username.charAt(0).toUpperCase()+username.slice(1).toLowerCase();
console.log(username);
document.getElementById("h").innerHTML=`Hellow ${username}`;