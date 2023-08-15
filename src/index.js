import keyBoard from "../public/classes/keyboard.js";
import hangManGame from "./hangManGame.js";
document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();     
    const hang=new hangManGame();
    hang.startGame()
})