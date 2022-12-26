var randInt = Math.floor(Math.random()*3 + 1);
// console.log(randInt);
var gameIcon = document.querySelector(".game-cont");
// console.log(gameIcon);
gameIcon.addEventListener("click", userInput);


function userInput() {
    var gameIcon = document.querySelectorAll(".game-cont");
    for(let i=0; i<3; i++) {
    var thisIcon = this.innerHTML;
    console.log(thisIcon);
    }
    // document.querySelector(thisIcon);
  
}