//business logic
function PlayerOne(name) {
  this.name = name;
  this.roundtally = 0;
  this.total = 0;
}

function PlayerTwo(name) {
  this.name = name;
  this.roundtally = roundtally;
  this.total = total;
}

// dice:
function oneThroughSix(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

PlayerOne.prototype.setToZero = function {
  this.roundtally === 0;
}



PlayerOne.prototype.addToRoundTally = function(number) {
    console.log(this.roundtally);
    while (number != 1) {
      this.roundtally += number;
      console.log(this.roundtally);
      return this.roundtally;
    }
}

function isItOne(number) {
  if (number === 1) {
    this.roundtally === 0;
    return false;
  } else {
    return true;
  }
}



// user interface logic
//Player 1 adds name:
$(document).ready(function() {
  $("button#player1enter").click(function(event) {
    event.preventDefault();
    var playerOneName = $("input#player1name").val();
    $("p#1name").append("<p>Name: " + playerOneName + "</p>")
    var playerOne = new PlayerOne(playerOneName);
  });

//Player 2 adds name:
  $("button#player2enter").click(function(event) {
    event.preventDefault();
    var playerTwoName = $("input#player2name").val();
    $("p#2name").append("<p>Name: " + playerTwoName + "</p>")
    $("#hidethis").hide();
    var playerTwo = new PlayerTwo(playerTwoName);
  });

//Player 1 clicks 'roll':
  $("button#rollbutton1").click(function(event) {
    $(".rolled-dice1").empty();
    $(".rolled-dice1").append("<h3>You rolled a: </h3>")
    var thisClick = oneThroughSix(1,6);
    $(".rolled-dice1").append("<h4>" + thisClick + "</h4>");
    if (isItOne(thisClick) === false) {
      $(".rolled-dice1").append("<h5>Too bad! You lose your points. Next player's turn.</h5>");
    var roundTotal = playerOne.addToRoundTally(thisClick);
    console.log(roundTotal);
    };
  });

//Player 2 clicks 'roll':
  $("button#rollbutton2").click(function(event) {
    $(".rolled-dice2").empty();
    $(".rolled-dice2").append("<h3>You rolled a: </h3>")
    var thisClick = oneThroughSix(1,6);
    $(".rolled-dice2").append("<h4>" + thisClick + "</h4>");
    if (isItOne(thisClick) === false) {
      $(".rolled-dice2").append("<h5>Too bad! You lose your points. Next player's turn.</h5>");
    };
  });





});
