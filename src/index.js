import keyBoard from "../public/classes/keyboard.js";
import panel from "../public/classes/panel.js";
import bodyParts from "./bodyParts.js";
let word="comer"
document.addEventListener('DOMContentLoaded',()=>{
    const board=new keyBoard();
    const panelLetters=new panel(word);
    const body=new bodyParts();
    document.querySelector('#mainContainer').appendChild(board.createKeyboard());
    document.querySelector("#container").appendChild(panelLetters.createPanel());
    document.querySelector("#dummy").appendChild(body.showImg())
});