// Gather DOM elements
const startBtn = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');

// Create game variable for access in event listeners
let game;

// Event listeners
// Start button click listener
startBtn.addEventListener('click', () => {
	game = new Game();
	game.startGame();
});

// On-screen button keyboard click listener
keyboard.addEventListener('click', (evt) => {
	if (evt.target.tagName === 'BUTTON') {
		game.handleInteraction(evt.target.textContent);
	}
});

// User keyboard keyup event listener
document.addEventListener('keyup', (evt) => {
	if (/[a-z]/.test(evt.key)) {
		game.handleInteraction(evt.key);
	}
});
