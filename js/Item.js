export default class Item {

    playerChoice
    computerChoice
    items = [
        { id: 0, name: 'rock', counter: 1, win: 2 },
        { id: 1, name: 'paper', counter: 2, win: 0 },
        { id: 2, name: 'scissors', counter: 0, win: 1 },
    ]


    getPlayerOption(playerChoice) {
        this.playerChoice = playerChoice
    }

    getComputerOption(computerChoice) {
        this.computerChoice = computerChoice
    }

    _getResult() {

        let point

        const res = this.items.find((e) => {
            return e.id === parseInt(this.playerChoice)
        })

        if (res.counter === this.computerChoice) {
            return point = 0 //win AI
        }
        else if (res.win === this.computerChoice) {
            return point = 1 //win player
        }
        else return point = -1 //tie

    }

    setResult() {

        console.log(`${this.playerChoice}, ${this.computerChoice}`)
        return this._getResult()


    }

}                                  