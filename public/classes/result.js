class result{
    constructor(state){
        this.state=state;
    }
    showResult(word){
        if(!this.state){
            return "You lost, the secret word was :"+ word
        }
        return "You win, the secret word was :"+ word
    }
}