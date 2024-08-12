"use strict";
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ' 🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = ' ⛔️ No Number!';
    displayMessage("⛔️ No Number!");
  }

  //when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '  🎉 Correct Number!';
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "32rem";

    //highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //when the guess is not correct
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? ' 📈 The number is too high!'
      //     : ' 📉 The number is too low!';
      displayMessage(
        guess > secretNumber
          ? " 📈 The number is too high!"
          : " 📉 The number is too low!"
      );
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '  Lost the game!';
      displayMessage("😢 You Lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   //when guess is high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         ' 📈 The number is too high!';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '  Lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //   //when guess is low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         ' 📉 The number is too low!';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '  Lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//reset the game
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = '  Start guessing...';
  displayMessage(" Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
