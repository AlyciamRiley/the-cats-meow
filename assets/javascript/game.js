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
    

    //wins and losses are set to zero

}


startGame();

//user interaction
//============================================================
function gamePlay() {

   $('#total-score').text("Total Score: " + totalScore);
    //user presses bunny cat (on click event)
    $("#bunnyCat").click(function () {
        //number is added to total score
        totalScore = Number(totalScore) + Number($(this).val());
        $('#total-score').text("Total Score: " + totalScore);
        totalScore += bunnyCat;
        
        
        console.log(totalScore);
    });



    //user presses boa cat (on click event)
    $("#boaCat").click(function () {
        //number is added to total score
        totalScore = Number(totalScore) + Number($(this).val());
        $('#total-score').text("Total Score: " + totalScore);
        totalScore += boaCat;

      console.log(totalScore);
    });

    //user presses pirate cat (on click event)
    $("#pirateCat").click(function () {
        //number is added to total score
        totalScore = Number(totalScore) + Number($(this).val());
        $('#total-score').text("Total Score: " + totalScore);
        totalScore += pirateCat;
        
        console.log(totalScore);
    });


    //user presses watermelon cat (on click event)
    $("#watermelonCat").click(function () {
        //number is added to total score
        totalScore = Number(totalScore) + Number($(this).val());
        $('#total-score').text("Total Score: " + totalScore);
        totalScore += watermelonCat;
       
        console.log(totalScore);
    });


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
