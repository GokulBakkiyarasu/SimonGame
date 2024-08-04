# Simon Game

A simple Simon game with a graphical user interface built using HTML, CSS, and JavaScript. The game challenges players to remember and repeat increasingly long sequences of colors.

![Screenshot 2024-08-04 104457](https://github.com/user-attachments/assets/5e915bba-c4c3-46c2-82b4-c4e0ed7afc21)

## Features
- Start or restart the game by pressing any key.
- Click the colored buttons in the correct order to match the sequence.
- Listen to sounds and see animations for each button press.
- Game ends when the player makes a mistake, with a "Game Over" message.

## Getting Started
To get started with this project, simply clone the repository and open the `index.html` file in your web browser.

### Prerequisites
- A modern web browser
- Internet connection to load jQuery from CDN

### Installation
1. Clone the repository: 
   ```bash
   git clone https://github.com/your_username/simon-game.git
   ```
2. Open the `index.html` file in your browser:
   ```bash
   open index.html
   ```

## Usage
1. Open the `index.html` file in your browser.
2. Press any key to start the game.
3. Click the buttons in the same order as the sequence shown by the game.
4. Try to remember and repeat the sequence as it gets longer with each level.

## File Structure
```
├── game.js             # Main game logic
├── index.html          # HTML file to set up the game structure
├── styles.css          # CSS file for styling the game
└── sounds              # Folder containing sound files for button clicks
    ├── blue.mp3
    ├── green.mp3
    ├── red.mp3
    └── wrong.mp3
    └── yellow.mp3
```

## Game Logic

### Restarting the Game
```javascript
$(document).on("keypress", () => gameRestart());
```

### Handling Button Clicks
```javascript
$(".btn").click((evt) => handleClick(evt));
```

### Handling Click Event
```javascript
function handleClick(evt) {
  var userChosenColor = evt.target.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  var checkedAnswer = checkAnswer(userClickedPattern.length - 1);
  if (!checkedAnswer) {
    gameOver();
  }
}
```

### Playing Sound
```javascript
function playSound(name) {
  var sound = new Audio(`./sounds/${name}.mp3`);
  sound.play();
}
```

### Animating Button Click
```javascript
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(() => $("#" + currentColor).removeClass("pressed"), 100);
}
```

### Checking User's Answer
```javascript
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => nextSequence(), 1000);
      userClickedPattern = [];
    }
  } else {
    return false;
  }
  return true;
}
```

### Ending the Game
```javascript
function gameOver() {
  $("#level-title").text("Game Over, Press Any Key to Restart");
  playSound("wrong");
  $("body").addClass("red");
  setTimeout(() => $("body").removeClass("red"), 100);
}
```

### Restarting the Game
```javascript
function gameRestart() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  nextSequence();
}
```

### Generating Next Sequence
```javascript
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  level++;
  $("#level-title").text(`Level: ${level}`);
}
```

## Contributing
Contributions to this project are welcome. To contribute, follow these steps:
1. Fork this repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Make and commit your changes (`git commit -am "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a new Pull Request

## Find me on
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-Profile-informational?style=flat&logo=linkedin&logoColor=white&color=0D76A8)](https://www.linkedin.com/in/gokul-bakkiyarasu-531535251)
