import Item from "./Item.js"

const item = new Item()

document.addEventListener('DOMContentLoaded', () => {

    //push start button
    startGame()
    //player turn
    playerTurn()
    //AI turn
    AITurn()
    //show score
})

function startGame() {
    const startButton = document.querySelector('.board__reset--button')
    const startText = document.querySelector('.board__messages')
    startButton.addEventListener('click', (e) => {
        startText.innerHTML = '<h1>The game begins!</h1>'
    })
}


function playerTurn() {
    const playerSelection = document.querySelector('.board__icons')
    playerSelection.addEventListener('click', (e) => {

        if (e.target.classList.contains('icons')) {
            const option = e.target.dataset.id
            callItem(option)
        }

    })


}

function AITurn() {
    let option = Math.floor(Math.random() * 3)
    if (option >= 3) throw new ('wrong AI Selection: ', option)
    return option
}

function callItem(playerChoice) {

    const computerChoice = AITurn()
    let res

    item.getPlayerOption(playerChoice)

    item.getComputerOption(computerChoice)

    res = item.setResult()

    scoreDisplay(res)

}

function scoreDisplay(res) {

    /**
     * @var res 0 AI| 1 P| -1 T
     */
    const score = document.querySelector('.board__score')



    // 



}






