function clickEvent(e){
let validate=true;
e.target.disabled=true;
const word=localStorage.getItem("word");
if (word.includes(e.target.textContent)) {
    e.target.className="correct";
    const divs=document.querySelectorAll("#answers div");
    for (let i = 0; i < word.length; i++) {
        if (word[i]===e.target.textContent) {
            divs[i].textContent=e.target.textContent;
             validate=divs.forEach((i)=>{
                if(i.textContent!=="_"){
                    alert("Gana")
                    return true
                }
                return false
            })
        }
    }
    if (validate) {
        alert("ganaste")
    }
}else{
    e.target.className="incorrect";
}
}
export default clickEvent;