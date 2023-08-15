class panel{
    constructor(word){
        if (word==="") {
            throw Error ("Invalid Word")
        }
        this.word=word;
    }
    createPanel(){
        let count=0;
        let div=document.createElement("div");
        div.id="answers";
        while (count<this.word.length) {
            let letter=document.createElement("div");
            letter.textContent="_";
            div.appendChild(letter);
            count++;
        }
        return div;
    }
}
export default panel;