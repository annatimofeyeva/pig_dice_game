//business logic
function PlayerOne(name, total) {
  this.name = name;
  this.total = total;
}

function PlayerTwo(name, total) {
  this.name = name;
  this.total = total;
}

function oneThroughSix(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// user interface logic
$(document).ready(function() {
  $("button#player1enter").click(function(event) {
    event.preventDefault();
    var playerOneName = $("input#player1name").val();
    $("p#1name").append("<p>Name: " + playerOneName + "</p>")
    var playerOne = new PlayerOne(playerOneName, 0);

  });

  $("button#player2enter").click(function(event) {
    event.preventDefault();
    var playerTwoName = $("input#player2name").val();
    $("p#2name").append("<p>Name: " + playerTwoName + "</p>")
    $("#hidethis").hide();
    var playerTwo = new PlayerTwo(playerTwoName, 0);
  });

// decide who rolls first:
  $("button#rollbutton").click(function(event) {
    $(".who-goes-first").empty();
    $(".who-goes-first").append("<h3>" + (oneThroughSix(1, 6)) + "</h3>");
  });
});
