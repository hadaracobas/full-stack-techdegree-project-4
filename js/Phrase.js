/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
  get phrase() {
    return this._phrase;
  }
  set phrase(phrase) {
    this._phrase = phrase.toLowerCase();
  }

  /**
   * diaplay letter placeholders
   * @return {string} return html string
   */
  addPhraseToDisplay() {
    let htmlStr = "";
    const arrOfPhraseWords = this.phrase.split(" ");
    for (let i = 0; i < arrOfPhraseWords.length; i++) {
      let splittedWord = arrOfPhraseWords[i].split("");
      htmlStr += splittedWord
        .map((e) => `<li class="hide letter ${e}">${e}</li>`)
        .join("");
      htmlStr += '<li class="space"> </li>';
    }
    // insert html phrase
    document.getElementById("phrase").getElementsByTagName("ul")[0].innerHTML =
      htmlStr;
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const phraseElem = document.getElementById("phrase");
    const matchLetterElements = phraseElem.getElementsByClassName(letter);
    for (let i = 0; i < matchLetterElements.length; i++) {
      matchLetterElements[i].classList.remove("hide");
      matchLetterElements[i].classList.add("show");
    }
  }
}
