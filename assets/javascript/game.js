//Global Variables
//=========================================================

var winCounter = 0;
var lossCounter = 0;
var totalScore = 0;
var targetNumber = [];
var pirateCat = 0;
var watermelonCat = 0;
var boaCat = 0;
var bunnyCat = 0;
//var computerGuess= [];


//start of game
//===========================================================
function startGame() {
    //computer generates random "goal" number
    targetNumber = Math.floor(Math.random() * 99) + 1;
    targetNumber = $("#target-number").text(targetNumber);
    




    //computer randomly assigns values to each cat -- 
    pirateCat = Math.floor(Math.random() * 25) + 1;
    // console.log(pirateCat);

    watermelonCat = Math.floor(Math.random() * 25) + 1;
    //console.log(watermelonCat);

    boaCat = Math.floor(Math.random() * 25) + 1;
    //console.log(boaCat);

    bunnyCat = Math.floor(Math.random() * 25) + 1;
    //console.log(bunnyCat);

    //total score is set to zero
    totalScore = [];

    //wins and losses are set to zero

}


startGame();

//user interaction
//============================================================
function gamePlay() {
    

    //user presses bunny cat (on click event)
    $("#bunnyCat").on("click", function () {
        totalScore += bunnyCat;
        //number is added to total score
        //totalScore = $("#total-score").replaceWith(totalScore);

        console.log(totalScore);
    });

    
      //user presses boa cat (on click event)
    $("#boaCat").on("click", function () {
        totalScore += boaCat;
       //totalScore = $("#total-score").replaceWith(totalScore);
        console.log(totalScore);
    });
    
      //user presses pirate cat (on click event)
    $("#pirateCat").on("click", function () {
        totalScore += pirateCat;
      // totalScore = $("#total-score").replaceWith(totalScore);;
        console.log(totalScore);
    });

      //user presses watermelon cat (on click event)
    $("#watermelonCat").on("click", function () {
        totalScore += watermelonCat;
        //totalScore = $("#total-score").replaceWith(totalScore);
        console.log(totalScore);
    });
    
     

//number is added to "total score" box

    //user continues to choose crystals until target number is met

    //If target number is met..
    if (totalScore === targetNumber) {
         //win counter goes up by 1
        wins++
        alert("you win");
        //game starts over
        startGame();
        
    }
   
    //if total score exceeds target number
    if (totalScore > targetNumber) {
        //losses goes up by 1
        losses++
        alert("you lose");
        //game starts over
        startGame();
    }
    
  

    

    

    

    
  

}

gamePlay();

