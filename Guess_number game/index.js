let guess;
let retry=true;
let min=1;
let max=100;
let attempts=0;
let answer=Math.floor(Math.random()*(max-min)+1)+min;
while(retry){
    guess=window.prompt(`Guess a number between ${min} & ${max}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number!");
    }else if(guess<min || guess>max){
        window.alert("Please enter a valid number!");
    }else{
        attempts++;
        if(guess<answer){
            window.alert("try something bigger!");
        }else if(guess>answer){
            window.alert("try something smaller!");
        }else{
            console.log(`you won!!! correct answer is ${answer} you made it in ${attempts} attempts!!!`);
            retry=false;
        }
    }
}