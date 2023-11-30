export default class Game {

    playerOption = 0
    AIOption = 0
    playerPoints = 0
    AIPoints = 0
    items = [
        { id: 0, name: 'rock', counter: 1, win: 2 },
        { id: 1, name: 'paper', counter: 2, win: 0 },
        { id: 2, name: 'scissors', counter: 0, win: 1 },
    ]
    res

    constructor() {
        this.playerSelection = document.querySelector('.board__icons')
        this.score = document.querySelector('.board__score')
        this.setPlayerTurn()
    }

    setAITurn() {
        this.AIOption = Math.floor(Math.random() * 3)
        if (this.AIOption >= 3) throw new ('wrong AI Selection: ', option)
    }


    setPlayerTurn() {
        this.playerSelection.addEventListener('click', (e) => {
            if (e.target.classList.contains('icons')) {
                this.playerOption = e.target.dataset.id
                this.setAITurn()
                this.setResult()
            }
        })
    }


    setResult() {

        let res = this.items.find((e) => {
            return e.id === parseInt(this.playerOption)
        })

        console.log(`Player: ${this.playerOption}, AI: ${this.AIOption}`);

        if (res.counter === this.AIOption) {
            this.AIPoints++ //win AI
            this.score.children[1].children[0].textContent = this.AIPoints
        }
        else if (res.win === this.AIOption) {
            this.playerPoints++ //win player
            this.score.children[0].children[0].textContent = this.playerPoints
        }
        else this.point = -1 //tie

    }


}