import result from "../src/result.js";
import hangManGame from "../src/hangManGame.js";
const hang=new hangManGame();
function clickEvent(e) {
  const word = localStorage.getItem("word");
  let validate=hang.checkletter(e.target.textContent,word);//valida si completo la palabra
  let resultC =new result(validate,word);
  e.target.disabled = true;
  if (word.includes(e.target.textContent)) {
    e.target.className = "correct";
    if (validate) {
       console.log(resultC.showResult(true))
    }
  } else {
    e.target.className = "incorrect";
    resultC.errorCounter();
    if (resultC.incorrects>=7) {
      console.log(resultC.showResult(false))
    }
  }
}
export default clickEvent;
