export default class Game {

    playerOption = null

    constructor() {
        this.playerSelection = document.querySelector('.board__icons')
        this.setPlayerTurn()
        this.playerGame()
    }

    setPlayerTurn() {
        this.playerSelection.addEventListener('click', (e) => {
            if (e.target.classList.contains('icons')) {
                this.playerOption = e.target.dataset.id
            }
        })
    }



    playerGame() {
        console.log(this.playerOption);
    }


    AITurn() {
        let option = Math.floor(Math.random() * 3)
        if (option >= 3) throw new ('wrong AI Selection: ', option)
        return option
    }

}