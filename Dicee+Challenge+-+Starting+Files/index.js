// Generate random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Test it in console
// console.log(randomNumber1);

var randomDiceImage = "dice"+randomNumber1+".png";//dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage;//images/dice1.png - 6

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

//second way of doing 
var randomNumber2 = Math.floor(Math.random()* 6)+1;

var randomImageSource2 = "images/dice" + randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "draw";
}