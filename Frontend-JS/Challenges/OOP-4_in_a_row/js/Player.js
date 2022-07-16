class Player{
    constructor(name, id, color, active){
        this.name = name 
        this.id = id 
        this.color = color
        this.active = active 
        this.tokens = this.createTokens(21)
    }

    /**
     * Create token objects for players 
     * @param {integer} num  Number of token objects to be created 
     * @returns an array of 21 tokens for each player 
     */

    createTokens(num){
      const tokens = []

        for(let i = 0; i < num; i++){
            let token = new Token(i,this)
            tokens.push(token)
        }

        return tokens
    }
}