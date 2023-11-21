const OPTIONS = 3

const game = {
    Rock: 0,
    Paper: 1,
    Scissors: 2
}

function getComputerChoice() {
    return Math.floor(Math.random() * OPTIONS);
}

function getPlayerChoice() {
    return Math.floor(Math.random() * OPTIONS);
}

let AISelection = getComputerChoice()
let PlayerSelection = getPlayerChoice()

function playRound(AISelection, PlayerSelection) {

    if (AISelection === game.Rock && PlayerSelection === game.Paper ||
        AISelection === game.Scissors && PlayerSelection === game.Rock ||
        AISelection === game.Paper && PlayerSelection === game.Scissors) {
        console.log(`Player:${PlayerSelection} beats AI:${AISelection}.`)
    }

    else if (AISelection === game.Paper && PlayerSelection === game.Rock ||
        AISelection === game.Rock && PlayerSelection === game.Scissors ||
        AISelection === game.Scissors && PlayerSelection === game.Paper) {
        console.log(`AI:${AISelection} beats Player:${PlayerSelection}`)
    }

    else console.log("tie")

}




playRound(AISelection, PlayerSelection)


