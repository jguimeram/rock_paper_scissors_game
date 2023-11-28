import Item from "./Item.js"
import Game from "./Game.js"

const item = new Item()
const game = new Game()

document.addEventListener('DOMContentLoaded', () => {
    //push start button
    startGame()
})

function startGame() {
    const startButton = document.querySelector('.board__reset--button')
    const startText = document.querySelector('.board__messages')
    startButton.addEventListener('click', (e) => {
        startText.innerHTML = '<h1>The game begins!</h1>'
    })
}

const playerChoice = game.setPlayerChoice()

const computerChoice = game.setComputerChoice()

/* item.getPlayerOption(playerChoice)

item.getComputerOption(computerChoice)

item.setResult() */










