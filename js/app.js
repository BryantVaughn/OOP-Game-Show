const startBtn = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');

let game;

startBtn.addEventListener('click', () => {
	game = new Game();
	game.startGame();
});

keyboard.addEventListener('click', (evt) => {
	if (evt.target.tagName === 'BUTTON') {
		game.handleInteraction(evt);
	}
});
