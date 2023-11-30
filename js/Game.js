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
    actionsArray = []

    constructor() {
        this.playerSelection = document.querySelector('.board__icons')
        this.score = document.querySelector('.board__score')
        this.actions = document.querySelector('.actions')
        this.messages = document.querySelector('.board__messages')
        this.button = document.querySelector('.board__reset--button')
        this.setPlayerTurn()
        this.resetGame()

    }

    setAITurn() {
        this.AIOption = Math.floor(Math.random() * 3)
        if (this.AIOption >= 3) throw new ('wrong AI Selection: ', option)
        this.setResult()
    }


    setPlayerTurn() {
        this.playerSelection.addEventListener('click', (e) => {
            if (e.target.classList.contains('icons')) {
                this.playerOption = e.target.dataset.id
                this.setAITurn()
            }
        })
    }


    setResult() {


        let res = this.items.find((e) => {
            return e.id === parseInt(this.playerOption)
        })

        if (this.playerPoints === 10 || this.AIPoints === 10) console.log('finish');

        if (res.counter === this.AIOption) {
            this.AIPoints++ //win AI
            this.score.children[1].children[0].textContent = this.AIPoints
            this.messages.innerHTML = '<h1>AI wins!</h1>'
        }
        else if (res.win === this.AIOption) {
            this.playerPoints++ //win player
            this.score.children[0].children[0].textContent = this.playerPoints
            this.messages.innerHTML = '<h1>Player wins!</h1>'
        }
        else this.messages.innerHTML = '<h1>Tie!</h1>'

        /* console.log(`Player: ${this.playerOption}, AI: ${this.AIOption}`); */
        this.printAction()
    }

    printAction() {
        const action = document.createElement('p')

        action.classList.add('actions--p')

        this.actions.appendChild(action)

        action.textContent = `${this.items[this.playerOption].name} - ${this.items[this.AIOption].name}`

        this.actionsArray.push(action)

        this.cleanOldactions()

        this.checkIfWin()

    }

    cleanOldactions() {
        setInterval(() => {
            this.actionsArray.forEach(e => {
                let opt = getComputedStyle(e)
                if (opt.opacity == 0) e.remove()
            })
        }, 1000)
    }

    checkIfWin() {
        if (this.AIPoints == 5 || this.playerPoints == 5) {
            this.messages.innerHTML = '<h1>Game Over!</h1>'
        }
    }

    resetGame() {
        this.button.addEventListener('click', () => {
            location.reload()
        })
    }

}



