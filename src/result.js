 import bodyParts from "./bodyParts.js";
 import { restart } from "../public/events.js";
class result {
  constructor(state,word) {
    this.state = state;
    this.incorrects = 0;
    this.word=word;
  }
  showResult() {
    const keyboard=document.querySelector("#keyboard");
    const retryBtn=document.createElement("button");
    retryBtn.textContent="Retry again"
    retryBtn.addEventListener("click",restart)
    const div=document.createElement("div");
    div.className="alertState";
    let text="";
    if (!this.state) {
      text="You lost, the secret word was :" +this.word;
    }else{
      text="You win, the secret word was :" + this.word;
    }
      div.textContent=text;
      div.appendChild(retryBtn)
      keyboard.innerHTML=""
      keyboard.appendChild(div)
  }
  errorCounter() {
    const counter = document.querySelector("#counter");
    this.incorrects = parseInt(counter.textContent) + 1;
    if (this.incorrects <= 7) {
      const body = new bodyParts();
      const dummy = document.querySelector("#dummy");
      counter.textContent = this.incorrects;
      dummy.innerHTML = "";
      dummy.appendChild(body.showImg(this.incorrects - 1));
    }
  }
}
export default result;
