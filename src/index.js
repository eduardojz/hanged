import keyBoard from "../public/classes/keyboard.js";
import panel from "../public/classes/panel.js";
let word="comer"
document.addEventListener('DOMContentLoaded',()=>{
    const board=new keyBoard();
    const panelLetters=new panel(word)
    document.querySelector('#mainContainer').appendChild(board.createKeyboard());
    document.querySelector("#container").appendChild(panelLetters.createPanel());
});