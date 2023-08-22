import panel from "../public/classes/panel.js";
import keyBoard from "../public/classes/keyboard.js";
import pokemon from "./api.js";
import result from "./result.js";
const container = document.querySelector("#mainContainer");
class hangManGame {
  constructor() {
    this.divs = [];
    this.game = `
    
    <div id="hanged">
    <div id="dummy"></div>
    <div id="showClue">    
    <div id="cronometro">2:00</div>
    <button class="showBtn" role="button"><span class="text">Show hint</span><span>-20 points</span></button>
    </div>
    <div id="pokemon"></div>
    <div id="container">
    <h1>Incorrect Counter <span id="counter">0</span>/7 </h1>
    <div><h1>Score <span id="score">0</span></h1></div>
    </div>`;
  }
  async initializeDispalyedWord() {
    const pokemons = new pokemon();
    let id = Math.floor(Math.random() * 200);
    const data = await pokemons.getpokemons(id);
    const name = data.forms[0].name;
    const imgPokemon = data.sprites.other["official-artwork"]["front_default"];
    localStorage.setItem("word", name);
    localStorage.setItem("pokemonImg", imgPokemon);
    console.log(name);
    return name;
  }
  async startGame() {
    localStorage.setItem("hints", 0); //guardar cantidad de intentos
    const board = new keyBoard();
    const panelLetters = new panel(await this.initializeDispalyedWord());
    container.innerHTML = "";
    container.innerHTML = this.game;
    container.appendChild(board.createKeyboard());
    container.querySelector("#container").appendChild(panelLetters.createPanel());
    //
    const divPokemon = container.querySelector("#pokemon");
    const img = new Image();
    img.src = localStorage.getItem("pokemonImg");
    img.className = "hide";
    divPokemon.appendChild(img);
    //show
    container.querySelector(".showBtn").addEventListener("click", () => {
      const score=document.querySelector("#score");
      score.textContent=parseInt(score.textContent)-20
      let hints = parseInt(localStorage.getItem("hints"));
      if (hints < 1) {
        img.className = "pokemonImg";
        hints++;
        localStorage.setItem("hints", hints);
      } else {
        alert("No se permiten mas ayudas");
      }
    });
    this.timer()
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
  timer() {
    const resultC=new result("timeout",localStorage.getItem("word"));
    let seconds = 59;
    let minutes = 1;
    let id = setInterval(function () {
      container.querySelector('#cronometro').textContent=`${minutes}:${seconds}`
      if (seconds === 0) {
        seconds = 59;
        minutes--;
      }
      if (minutes < 0) {
        resultC.showResult()
        alert("game finished")
        clearInterval(id);
      }
      seconds--;
    }, 1000);
  }
}
export default hangManGame;
