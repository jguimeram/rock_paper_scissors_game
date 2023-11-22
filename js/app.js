const OPTIONS = 3

const game = {
	Rock: 0,
	Paper: 1,
	Scissors: 2
}

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const cards = document.querySelector('.cards')



const AISelection = function () {
	return Math.floor(Math.random() * OPTIONS);
}


cards.addEventListener('click', (e) => {
	if (e.target.id === 'rock') PlayerSelection(game.Rock)
	else if (e.target.id === 'paper') PlayerSelection(game.Paper)
	else if (e.target.id === 'scissors') PlayerSelection(game.Scissors)
})



/* function playRound(AISelection, PlayerSelection) {

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




playRound(AISelection, PlayerSelection) */


