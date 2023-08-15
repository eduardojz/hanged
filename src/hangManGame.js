// checkIfPlayerWon() y checkIfPlayerLost: Funciones encargadas de verificar si el jugador ya ganó o perdió.
import panel from "../public/classes/panel.js";
import keyBoard from "../public/classes/keyboard.js";
class hangManGame {
  constructor() {
    //this.words =["comer","salir","dormir","bailar","jugar","programar"];
    this.words =["comer"];
    this.divs = [];
    this.game = `<div id="hanged">
    <div id="dummy"></div>
    <div id="container">
    <h1>Incorrect Counter <span id="counter">0</span>/7 </h1>
    </div>`;
  }
  initializeDispalyedWord() {
    let id=Math.floor(Math.random() * this.words.length);
    localStorage.setItem("word",this.words[id])
    return this.words[id];
  }
  startGame() {
    const board = new keyBoard();
    const panelLetters = new panel(this.initializeDispalyedWord());
    const container = document.querySelector("#mainContainer");
    container.innerHTML = "";
    container.innerHTML = this.game;
    container.appendChild(board.createKeyboard());
    container.querySelector("#container").appendChild(panelLetters.createPanel());
  }
  checkletter(targetText, word) {
    let validate = false;
    this.setStatus(document.querySelectorAll("#answers div"));
    let divs = this.getStatus();
    for (let i = 0; i < word.length; i++) {
      if (word[i] === targetText) {
        divs[i].textContent = targetText;
      }
    } 
    for (let i = 0; i < divs.length; i++) {
      divs[i].textContent !== "_" ? (validate = true) : (validate = false);
      if (!validate) {
        break;
      }
    }
    this.setStatus(divs);
    return validate;
  }
  setStatus(divs) {
    this.divs = divs;
  }
  getStatus() {
    return this.divs;
  }
}
export default hangManGame;
