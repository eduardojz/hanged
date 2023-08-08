class result{
    constructor(state){
        this.state=state;
        this.incorrects=0;
    }
    showResult(word){
        if(!this.state){
            return "You lost, the secret word was :"+ word
        }
        return "You win, the secret word was :"+ word
    }
    errorCounter(){
        const counter=document.querySelector("#counter");
        this.incorrects=parseInt(counter.textContent)+1;
        counter.textContent=this.incorrects
    }
}
export default result;