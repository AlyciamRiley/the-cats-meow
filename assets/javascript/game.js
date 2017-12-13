//Global Variables
//=========================================================

var winCounter = 0;
var lossCounter = 0;
var totalScore = '';
var targetNumber;
var pirateCat = 0;
var watermelonCat = 0;
var boaCat = 0;
var bunnyCat = 0;



//start of game
//===========================================================
function startGame() {
    //computer generates random "goal" number8
    targetNumber = Math.floor(Math.random() * 80) + 20;
    targetNumber = $("#target-number").text(targetNumber);





    //computer randomly assigns values to each cat -- 
    pirateCat = Math.floor(Math.random() * 12) + 1;
    // console.log(pirateCat);

    watermelonCat = Math.floor(Math.random() * 12) + 1;
    //console.log(watermelonCat);

    boaCat = Math.floor(Math.random() * 12) + 1;
    //console.log(boaCat);

    bunnyCat = Math.floor(Math.random() * 12) + 1;
    //console.log(bunnyCat);

    //total score is set to zero
    

    //wins and losses are set to zero

}




//user interaction
//============================================================
function gamePlay() {

   $('#total-score').text("Total Score: " + totalScore);
    //user presses bunny cat (on click event)
    $("#bunnyCat").click(function () {
        //number is added to total score
        totalScore = Number(totalScore) + Number($(this).val());
        totalScore += bunnyCat;
        $('#total-score').text("Total Score: " + totalScore);
        checkWin();
        
        
        
        console.log(totalScore);
    });



    //user presses boa cat (on click event)
    $("#boaCat").click(function () {
        //number is added to total score
        totalScore = Number(totalScore) + Number($(this).val());
        totalScore += boaCat;
        $('#total-score').text("Total Score: " + totalScore);
        checkWin();

      console.log(totalScore);
    });

    //user presses pirate cat (on click event)
   $("#pirateCat").click(function () {
        //number is added to total score
        totalScore = Number(totalScore) + Number($(this).val());
        totalScore += pirateCat;
        $('#total-score').text("Total Score: " + totalScore);
        checkWin();
        
        
        console.log(totalScore);
    });


    //user presses watermelon cat (on click event)
    $("#watermelonCat").click(function () {
        //number is added to total score
        totalScore += watermelonCat;
        totalScore = Number(totalScore) + Number($(this).val());
        
        $('#total-score').text("Total Score: " + totalScore);
        checkWin();
       
        console.log(totalScore);
    });


    //user continues to choose cats until target number is met

}

function checkWin(){
    
   
    if (targetNumber>totalScore) {
        lossCounter++;
        alert("you lose");
        //game starts over
        //startGame();
    }

    
    //If target number is met..
    if (targetNumber===totalScore) {
        //win counter goes up by 1
        winCounter++;
        alert("you win");
        //game starts over
        //startGame();

    }
  



}
startGame();
gamePlay();
checkWin();
