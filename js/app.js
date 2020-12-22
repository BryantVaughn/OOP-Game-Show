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

// Keyboard click listener
keyboard.addEventListener('click', (evt) => {
	if (evt.target.tagName === 'BUTTON') {
		game.handleInteraction(evt);
	}
});
