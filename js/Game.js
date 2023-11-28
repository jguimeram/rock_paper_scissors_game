export default class Game {

    playerChoice
    computerChoice

    AITurn() {
        let option = Math.floor(Math.random() * 3)
        if (option >= 3) throw new ('wrong AI Selection: ', option)

        return option
    }

    playerTurn() {
        const playerSelection = document.querySelector('.board__icons')
        let option
        playerSelection.addEventListener('click', (e) => {

            if (e.target.classList.contains('icons')) {
                option = e.target.dataset.id
            }
        })

        return option
    }

    _getPlayerChoice() {
        this.playerChoice = this.playerTurn()
    }

    _getComputerChoice() {
        this.computerChoice = this.AITurn()
    }

    setPlayerChoice() {
        return this.playerChoice
    }
    setComputerChoice() {
        return this.computerChoice
    }

}