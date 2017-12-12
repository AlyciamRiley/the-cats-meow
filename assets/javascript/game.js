//Global Variables
//=========================================================

var winCounter = 0;
var lossCounter = 0;
var totalScoure = 0;
var targetNumber = [];
var pirateCat = 0;
var watermelonCat = 0;
var boaCat = 0;
var bunnyCat = 0;
//var computerGuess= [];


//start of game
//===========================================================
function startGame(){
//computer generates random "goal" number
targetNumber = Math.floor(Math.random() * 99) + 1;
    targetNumber =  $("#target-number").text(targetNumber);
    
    


//computer randomly assigns values to each cat -- 
    pirateCat = Math.floor(Math.random() * 25) + 1;
    console.log(pirateCat);
    
    watermelonCat = Math.floor(Math.random() * 25) + 1;
    console.log(watermelonCat);
    
    boaCat= Math.floor(Math.random() * 25) + 1;
    console.log(boaCat);
    
    bunnyCat = Math.floor(Math.random() * 25) + 1;
    console.log(bunnyCat);

//total score is set to zero
    totalScore = [];

//wins and losses are set to zero
    
}


startGame()

//user interaction
//============================================================

//user presses cat (on click event)

//number is added to "total score" box

//user continues to choose crystals until target number is met

//If target number is met..
        
    //win counter goes up by 1
    
    //game starts over

//if total score exceeds target number
    
    //losses goes up by 1

