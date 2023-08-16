import {clickEvent} from "../events.js";
const letters=['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
class keyBoard{
    constructor(){
        this.wordsStates=letters.map((letter)=>{
            return {letter:letter,state:false}
        })
    }
    createKeyboard(){
        let count=0;
        const lettersContainer=document.createElement("div");
        lettersContainer.id="keyboard";
        while (count<letters.length) {
            const buttons=document.createElement("button");
            buttons.textContent=letters[count];
            buttons.addEventListener("click",clickEvent);
            lettersContainer.appendChild(buttons);
            count++;
        }
        return lettersContainer;
    }
    showCorrect(){
        return "correcto"
    }
    showInCorrect(){
        return "incorrecto"
    }
}
export default keyBoard;