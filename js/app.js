/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// start game - handle on click
let game;
const resetBtn = document.getElementById("btn__reset");
resetBtn.addEventListener("click", () => {
  resetGame();
  game = new Game();
  game.startGame();
});

// keyboard letter buttons - handle on click
const keyrowsContainer = document.getElementById("qwerty");
keyrowsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    game.handleInteraction(event.target);
  }
});

// Let players use their physical computer keyboard to enter guesses
const keys = keyrowsContainer.getElementsByClassName("key");
document.addEventListener("keyup", (event) => {
  for (let i = 0; i < keys.length; i++) {
    if (event.key === keys[i].textContent) {
      game.handleInteraction(keys[i]);
    }
  }
});

// reset game
function resetGame() {
  // remove li elements form ul phrase element
  document.getElementById("phrase").getElementsByTagName("ul")[0].innerHTML =
    "";
  // remove chosen/wrong classes from keyboard buttons
  const keyboardBtns = keyrowsContainer.getElementsByTagName("button");
  for (let i = 0; i < keyboardBtns.length; i++) {
    keyboardBtns[i].classList.contains("chosen") &&
      keyboardBtns[i].classList.remove("chosen");
    keyboardBtns[i].classList.contains("wrong") &&
      keyboardBtns[i].classList.remove("wrong");
    keyboardBtns[i].disabled = false;
  }
  // reset live/lost icons
  const heartIcons = scoreboard.querySelectorAll(
    '[src="images/lostHeart.png"]'
  );
  for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].setAttribute("src", "images/liveHeart.png");
  }
}
