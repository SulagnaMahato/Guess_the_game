# Guess The Number Game

This is a simple number guessing game built using HTML, CSS, and JavaScript. The player has to guess a secret number between 1 and 20. The game provides feedback whether the guess is too high, too low, or correct. The player also has a score that decreases with each wrong guess, and a high score is recorded.

## Features

- **Random Number Generation:** A secret number is randomly generated between 1 and 20 at the start of the game and each time the player resets the game.
- **User Input Validation:** If no number is entered, the game will prompt the player to input a number.
- **Feedback System:** The game provides feedback if the guess is too high, too low, or correct.
- **Score Tracking:** The player's score starts at 20 and decreases with each incorrect guess.
- **High Score:** The highest score achieved during the session is tracked and displayed.
- **Reset Functionality:** Players can reset the game to play again without refreshing the page.

## How to Play

1. Enter a number between 1 and 20 in the input field.
2. Click the "Check!" button to see if your guess is correct.
3. The game will provide feedback if your guess is too high, too low, or correct.
4. If you guess the correct number, the game background will change, and your high score will be updated if your current score is higher.
5. If your guess is incorrect, your score will decrease by 1. If the score reaches 0, you lose the game.
6. Click the "Again!" button to reset the game and start a new round.

## Code Explanation

- **Random Number Generation:** 
  ```javascript
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  ```
  Generates a random number between 1 and 20.

- **Event Listeners:** 
  - `check` button: Evaluates the player's guess and updates the game state accordingly.
  - `again` button: Resets the game to its initial state.

- **Dynamic Feedback:** 
  The `displayMessage` function is used to update the feedback message shown to the player.

- **Score Management:**
  The player's score decreases by 1 with each incorrect guess. If the score reaches 0, the player loses the game.

## Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/SulagnaMahato/guess-the-game.git
```

Open the `index.html` file in your browser to play the game.

## Technologies Used

- **HTML:** For the basic structure of the game.
- **CSS:** For styling the game interface.
- **JavaScript:** For the game logic and interactivity.

## Contributing

If you want to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy the game and happy guessing! 🎉
