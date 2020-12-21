class Game {
	constructor() {
		this.missed = 0;
		this.phrases = this.initializePhrases();
		this.activePhrase = null;
	}

	/**
	 * Creates 5 Phrase objects.
	 * @return {Array} phrases - An Array of 5 Phrase objects.
	 */
	initializePhrases() {
		const phrases = [];
		phrases.push(new Phrase('A dime a dozen'));
		phrases.push(new Phrase('Beating around the bush'));
		phrases.push(new Phrase('I lost track of time'));
		phrases.push(new Phrase('Actions speak louder than words'));
		phrases.push(new Phrase('I can live with that'));

		return phrases;
	}

	/**
	 * Hides the start game overlay and initializes game with a random phrase.
	 */
	startGame() {
		document.getElementById('overlay').style.display = 'none';
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}

	/**
	 * Randomly selects a phrase from the phrases array.
	 * @return {object} Returns a Phrase object.
	 */
	getRandomPhrase() {
		const rand = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[rand];
	}

	/**
	 * Checks if user's selected letter is in the phrase or not,
	 * then checks if the game has been won or lost.
	 * @param {object} e - Event object for user's clicked letter.
	 */
	handleInteraction(e) {
		e.target.disabled = true;

		const letter = e.target.textContent;
		const isFound = this.activePhrase.checkLetter(letter);

		if (isFound) {
			e.target.classList.add('chosen');
			this.activePhrase.showMatchedLetter(letter);
			if (this.checkForWin()) this.gameOver(true);
		} else {
			e.target.classList.add('wrong');
			this.removeLive();
		}
	}

	/**
	 * Removes a life from the scoreboard.
	 */
	removeLive() {
		const lifeHearts = document.querySelectorAll('.tries img');
		lifeHearts[this.missed].src = 'images/lostHeart.png';
		this.missed += 1;

		if (this.missed > 4) this.gameOver(false);
	}

	/**
	 * Checks if all letters of phrase have been guessed.
	 * @return {boolean} isFound - Boolean value based on if all letters
	 *                   of phrase have been guessed.
	 */
	checkForWin() {
		const phraseItems = document.querySelectorAll('.letter');
		let isFound = true;
		phraseItems.forEach((item) => {
			if (item.className.includes('hide')) {
				isFound = false;
				console.log();
			}
		});
		return isFound;
	}

	/**
	 * Displays the overlay and provides a win or lose message for user.
	 * @param {boolean} result - Win (true) or lose (false).
	 */
	gameOver(result) {
		const overlay = document.getElementById('overlay');
		overlay.classList.remove('start');

		if (result) {
			overlay.querySelector('#game-over-message').textContent = 'You win!!!';
			overlay.classList.add('win');
		} else {
			overlay.querySelector('#game-over-message').textContent = 'You lose...';
			overlay.classList.add('lose');
		}

		overlay.style.display = '';
	}
}
