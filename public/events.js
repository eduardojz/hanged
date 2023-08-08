import result from "../src/result.js";
const word = localStorage.getItem("word");
function clickEvent(e) {
  let validate=verify(e.target.textContent);
  let resultC =new result(validate);
  e.target.disabled = true;
  if (word.includes(e.target.textContent)) {
    e.target.className = "correct";
    if (validate) {
        console.log(resultC.showResult(word));
    }
  } else {
    e.target.className = "incorrect";
    resultC.errorCounter();
    console.log(resultC.incorrects);
  }
}
//
function verify(targetText){
    let validate=false;
    const divs = document.querySelectorAll("#answers div");
    for (let i = 0; i < word.length; i++) {
      if (word[i] === targetText) {
        divs[i].textContent = targetText;
      }
    }
    for (let i = 0; i < divs.length; i++) {
        divs[i].textContent!=="_" ? validate=true : validate=false;
        if (!validate) {
            break;
        }   
    }
    return validate;
}
export default clickEvent;
