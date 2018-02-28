$(document).ready(function() {
  //Global Variables
  //=========================================================

  var wins = 0;
  var losses = 0;
  var totalScore = 0;
  var targetNumber = 0;
  var pirateCat = 0;
  var watermelonCat = 0;
  var boaCat = 0;
  var bunnyCat = 0;

  //start of game
  //===========================================================
  function startGame() {
    totalScore = 0;

    //computer generates random "goal" number
    targetNumber = Math.floor(Math.random() * 80 + 20);
    $("#target-number").text(targetNumber);

    //computer randomly assigns values to each cat --
    pirateCat = Math.floor(Math.random() * 12 + 1);

    watermelonCat = Math.floor(Math.random() * 12 + 1);

    boaCat = Math.floor(Math.random() * 12 + 1);

    bunnyCat = Math.floor(Math.random() * 12 + 1);
  }

  startGame();

  //user interaction
  //============================================================
  function gamePlay() {
    $("#total-score").text("Total Score: " + totalScore);
    //user presses bunny cat (on click event)
    $("#bunnyCat").click(function() {
      //number is added to total score
      totalScore = Number(totalScore) + Number($(this).val());
      totalScore += bunnyCat;
      $("#total-score").text("Total Score: " + totalScore);
      checkWin();
    });

    //user presses boa cat (on click event)
    $("#boaCat").click(function() {
      //number is added to total score
      totalScore = Number(totalScore) + Number($(this).val());
      totalScore += boaCat;
      $("#total-score").text("Total Score: " + totalScore);
      checkWin();
    });

    //user presses pirate cat (on click event)
    $("#pirateCat").click(function() {
      //number is added to total score
      totalScore = Number(totalScore) + Number($(this).val());
      totalScore += pirateCat;
      $("#total-score").text("Total Score: " + totalScore);
      checkWin();
    });

    //user presses watermelon cat (on click event)

    $("#watermelonCat").click(function() {
      //number is added to total score

      totalScore = Number(totalScore) + Number($(this).val());
      totalScore += watermelonCat;

      $("#total-score").text("Total Score: " + totalScore);
      checkWin();
    });

    //Function compares scores and declares winner/loser
    function checkWin() {
      if (totalScore > targetNumber) {
        losses++;
        $("#losses").text(losses);
        alert("you lose");
        //game starts over
        startGame();
      }

      if (targetNumber === totalScore) {
        wins++;
        alert("you win");
        $("#wins").text(wins);
        //game starts over
        startGame();
      }
    }
  }

  gamePlay();
});
