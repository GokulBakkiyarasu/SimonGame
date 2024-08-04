
// Check if the user is on mobile

const isMobile = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

// Show the correct title based on the device

if (isMobile()) {
  $("#level-title").text("Tap the Start Button to Play");
  $("#start-button").show();
} else {
  $("#level-title").text("Press A Key to Start");
  $("#start-button").hide();
}

// Start button event listener for mobile
$("#start-button").on("click", () => gameRestart());

// eventlistener for game restart


// Event listener for game restart
$(document).on("keypress", () => gameRestart());
 


// eventlistener for game restart

$(document).on("keypress", () => gameRestart());


// buttonColor list

var buttonColors = ["red", "blue", "green", "yellow"];

//eventlistener of button click

$(".btn").click((evt) => handleClick(evt));

// method that handles button click event
function handleClick(evt) {
  var userChosenColor = evt.target.id;
  //pushes the user choice into userClickedPattern list.
  userClickedPattern.push(userChosenColor);
  //play sound of the button that is clicked
  playSound(userChosenColor);
  //animate the button that is being clicked
  animatePress(userChosenColor);
  var checkedAnswer = checkAnswer(userClickedPattern.length - 1);
  //checks whether the user guessed wrong and triggers the gamerOver method if wrong guess was made.
  if (!checkedAnswer) {
    gameOver();
  }
}

//method that plays sound by taking a single parameter the name of the song that has to be played.
function playSound(name) {
  //create new audio variable
  var sound = new Audio(`./sounds/${name}.mp3`);
  //plays the sound
  sound.play();
}

//methods that animate the button when it is being clicked by taking the color of the button as parameter.
function animatePress(currentColor) {
  //select the button and adds pressed class to add css property
  $("#" + currentColor).addClass("pressed");
  //select the button and removes pressed class to remove css property
  setTimeout(() => $("#" + currentColor).removeClass("pressed"), 100);
}

//method to check whether the user click pattern is equal to the game pattern
function checkAnswer(currentLevel) {
  //checks whether the gamePattern equal to the pattern entered by user
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // at last if the sequence provided by the user is equal to game sequence then generate next sequence
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => nextSequence(), 1000);
      //reset the userClickedPattern to empty array
      userClickedPattern = [];
    }
    //if the sequence doesn't match return false
  } else {
    return false;
  }
  return true;
}

//method used to end the game
function gameOver() {

  // Check if the user is on a mobile device
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  //select the h1 and update it to game over based on the device type
  $("#level-title").text() !== "Game Over, Press Any Key to Restart"
    ? $("#level-title").text(isMobile ? "Game Over, Tap the Start Button to Restart" 
      : "Game Over, Press Any Key to Restart") : " ";
  
  //select the h1 and update it to game over
  $("#level-title").text() !== "Game Over, Press Any Key to Restart"
    ? $("#level-title").text("Game Over, Press Any Key to Restart")
    : "";

  //plays wrong sound after game over
  playSound("wrong");
  //animate the body on game over
  $("body").addClass("red");
  setTimeout(() => $("body").removeClass("red"), 100);
}

//method used to start or reset a game
function gameRestart() {
  //reset all the previous game data or initialize data req for the game to start
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  nextSequence();
}

//method to call a new sequence
function nextSequence() {
  //choose a random color and push it into the game pattern
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  //animate that random chosen color
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  //plays the corresponding sound of the color chosen
  playSound(randomChosenColor);

  //increment level and display it in the h1
  level++;
  $("#level-title").text(`Level: ${level}`);
}


// Start or reset game
function gameRestart() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  $("#start-button").hide(); // Hide the start button once the game starts
  nextSequence();
}