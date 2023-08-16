import panel from "../public/classes/panel.js";
import keyBoard from "../public/classes/keyboard.js";
import pokemon from "./api.js";
class hangManGame {
  constructor() { 
    this.divs = [];
    this.game = `<div id="hanged">
    <div id="dummy"></div>
    <div id="cronometro"></div>
    <div id="pokemon"></div>
    <div id="container">
    <h1>Incorrect Counter <span id="counter">0</span>/7 </h1>
    <div><h1>Score <span id="score">0</span></h1></div>
    </div>`;
  }
  async initializeDispalyedWord() {
    const pokemons= new pokemon();
    let id=Math.floor(Math.random() * 200);
    const data=await pokemons.getpokemons(id)
    const name=data.forms[0].name
    const img=data.sprites.other["official-artwork"]["front_default"]
    document.querySelector("#pokemon");
    console.log(data.sprites.other["official-artwork"]["front_default"]);
    localStorage.setItem("word",name)
    return name;
  }
  async startGame() {
    const board = new keyBoard();
    const panelLetters = new panel(await this.initializeDispalyedWord());
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
