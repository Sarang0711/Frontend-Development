
// console.log(gameIcon);
let score = 0;

document.querySelectorAll(".game-cont").forEach(div => div.addEventListener("click", ()=> {
    var userInput = div.classList[0]; 
    // points to first class of element
    // console.log(userInput);

    
    var p = document.querySelector("."+ userInput).classList.add("highlight");
    setTimeout(() => {
        document.querySelector("."+ userInput).classList.remove("highlight");
    }, 200);
    

    var randInt = Math.floor(Math.random()*3 + 1);
// console.log(randInt);

var computerInput;
switch (randInt) {
    case 1:
        computerInput = "paper-cont";
        break;
    case 2:
        computerInput = "scissor-cont";
        break;
    case 3:
        computerInput = "rock-cont";
        break;   
}
// console.log("computer " + computerInput);
    winner(userInput, computerInput);

}));

function winner(user, comp) {

    if(user === comp) {
        console.log("Tie Match");
    }
    else if (user === "paper-cont" && comp === "scissor-cont") {
        console.log("Comp wins");
        score--;
        document.querySelector(".scoreCard").innerHTML = score;

    }
    else if (user === "paper-cont" && comp === "rock-cont") {
        console.log("user wins");
        score++;
        document.querySelector(".scoreCard").innerHTML = score;
        
    }
    else if (user === "rock-cont" && comp === "scissor-cont") {
        console.log("User wins");
        score++;
        document.querySelector(".scoreCard").innerHTML = score;

    }
    else if (user === "rock-cont" && comp === "paper-cont") {
        console.log("Comp wins");
        score--;
        document.querySelector(".scoreCard").innerHTML = score;
    }
    else if (user === "scissor-cont" && comp === "rock-cont") {
        console.log("comp wins");
        score--;
        document.querySelector(".scoreCard").innerHTML = score;
    }
    else if (user === "scissor-cont" && comp === "paper-cont") {
        console.log("user wins");
        score++;
        document.querySelector(".scoreCard").innerHTML = score;
    }
  
}




