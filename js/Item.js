export default class Item {

    playerChoice
    computerChoice

    getPlayerOption(playerChoice) {
        this.playerChoice = playerChoice
    }

    getComputerOption(computerChoice) {
        this.computerChoice = computerChoice
    }

    _getResult() {

    }

    setResult() {
        console.log(this.playerChoice)
    }

    setItem() {
        return this.item
    }



}