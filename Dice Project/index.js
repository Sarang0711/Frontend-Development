
var playBtn = document.querySelector(".play");
playBtn.addEventListener("click", () => {

    // First random number 
    var randomNumber1 = (Math.random()*6) + 1;
    RN1 = Math.floor(randomNumber1);                // RN is int random number

    var RNImage1 = "dice" + RN1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", "images/" + RNImage1);

    // Second random number 
    var randomNumber2 = (Math.random()*6) + 1;
    RN2 = Math.floor(randomNumber2); 
    var RNImage2 = "dice" + RN2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", "images/" + RNImage2);


    // To announce winner
    if(RN1 > RN2) {
        document.querySelector("h1").innerHTML = "Player 1 wins🏆"
    }
    else if (RN2 > RN1) {
        document.querySelector("h1").innerHTML = "Player 2 wins🏆"
    }
    else {
        document.querySelector("h1").innerHTML = "Tie Match";

    }
});


