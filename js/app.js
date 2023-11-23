
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const cards = document.querySelector('.cards')
const playerScreen = document.querySelector('.player__selection')
const computerScreen = document.querySelector('.computer__selection')
const result = document.querySelector('.text__score')
const playerScore = document.querySelector('.player__score')
const computerScore = document.querySelector('.computer__score')
const board = document.querySelector('.board')

const OPTIONS = 3
let pScore = 0
let cScore = 0

const game = {
	player: {
		Rock: false,
		Paper: false,
		Scissors: false
	},
	computer: {
		Rock: false,
		Paper: false,
		Scissors: false
	}
}

function AISelection() {
	let option
	option = Math.floor(Math.random() * OPTIONS);
	if (option === 0) {
		computerScreen.innerHTML = '<img src="img/rock.svg" >'
		game.computer.Rock = true
	}

	else if (option === 1) {
		computerScreen.innerHTML = '<img src="img/paper.svg" >'
		game.computer.Paper = true
	}
	else if (option === 2) {
		computerScreen.innerHTML = '<img src="img/scissors.svg" >'
		game.computer.Scissors = true
	}
}

function resetScore() {
	game.player = { Rock: false, Paper: false, Scissors: false }
	game.computer = { Rock: false, Paper: false, Scissors: false }
}

function playRound() {

	console.log("Player:", game.player)
	console.log("Computer:", game.computer)

	if (game.computer.Rock && game.player.Paper ||
		game.computer.Scissors && game.player.Rock ||
		game.computer.Paper && game.player.Scissors) {
		pScore += 1
		playerScore.textContent = pScore
	}
	else if (game.computer.Rock && game.player.Scissors ||
		game.computer.Scissors && game.player.Paper ||
		game.computer.Paper && game.player.Rock) {
		cScore += 1
		computerScore.textContent = cScore
	}
	else {
		board.textContent = 'TIE!'
	}
	resetScore()
}

function cleanHTMLFromBoard() {
	board.innerHTML = ""
}

cards.addEventListener('click', (e) => {
	cleanHTMLFromBoard()

	if (pScore === 5) alert("player wins")
	if (cScore === 5) alert("computer wins")

	if (e.target.classList.contains('card-img')) {
		if (e.target.id === 'rock') {
			game.player.Rock = true
			playerScreen.innerHTML = '<img src="img/rock.svg" >'
		}
		else if (e.target.id === 'paper') {
			game.player.Paper = true
			playerScreen.innerHTML = '<img src="img/paper.svg" >'
		}
		else if (e.target.id === 'scissors') {
			game.player.Scissors = true
			playerScreen.innerHTML = '<img src="img/scissors.svg" >'
		}
	}

	AISelection()
	playRound()


})












