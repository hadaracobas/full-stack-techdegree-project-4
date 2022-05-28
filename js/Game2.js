/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = [
      new Phrase("The journey of a thousand miles begins with one step"),
      new Phrase("That which does not kill us makes us stronger"),
      new Phrase("Life is what happens when you’re busy making other plans"),
      new Phrase("When the going gets tough, the tough get going"),
      new Phrase("You must be the change you wish to see in the world"),
    ];
    this.activePhrase = null;
  }

  // getRandomPhrase method: get random phrase
  getRandomPhrase() {
    let randomPhraseIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhraseIndex];
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const phraseElem = document.getElementById("phrase");
    const hideLetterElements = phraseElem.getElementsByClassName("hide");
    if (hideLetterElements.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    // set lost image src
    const scoreboard = document.getElementById("scoreboard");
    const heartIcon = scoreboard.querySelector('[src="images/liveHeart.png"]');
    if (heartIcon) {
      heartIcon.setAttribute("src", "images/lostHeart.png");
      this.missed += 1;
    }
    if (this.missed === 5) {
      this.gameOver();
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlay = document.getElementById("overlay");
    const h1OverlayTitle = document.getElementById("game-over-message");
    overlay.style.display = "flex";
    if (gameWon) {
      overlay.className = "win";
      h1OverlayTitle.innerHTML = "Excellent, you won! 😜";
    } else {
      overlay.className = "lose";
      h1OverlayTitle.innerHTML = "Sorry, game over 😓";
    }
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    // disable clicked letter
    button.setAttribute("disabled", true);
    // check if letter includes in phrase
    if (this.activePhrase.checkLetter(button.textContent)) {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(button.textContent);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      button.classList.add("wrong");
      this.removeLife();
    }
  }

  // startGame method
  startGame() {
    // hide overlay screen
    document.getElementById("overlay").style.display = "none";

    // get random phrase
    this.activePhrase = this.getRandomPhrase();

    // display phrase
    this.activePhrase.addPhraseToDisplay();
  }
}
