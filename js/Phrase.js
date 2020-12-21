class Phrase {
	constructor(phrase) {
		this.phrase = phrase;
	}

	/**
	 * Renders blank phrase to screen.
	 */
	addPhraseToDisplay() {
		const phraseUL = document.querySelector('#phrase > ul');

		for (let char of this.phrase) {
			const listItem = document.createElement('li');
			if (!char === ' ') {
				listItem.className = `hide letter ${char}`;
			} else {
				listItem.className = 'space';
			}
			listItem.textContent = `${char}`;
			phraseUL.appendChild(listItem);
		}
	}

	/**
	 * Checks if user's selected letter is in the phrase.
	 * @param {object} e - Event object from user click.
	 */
	checkLetter(e) {
		const isFound = this.phrase.includes(e.target.textContent);
		if (isFound) this.showMatchedLetter(e.target.textContent);
	}

	/**
	 * Gathers all matching list items that match the letter selected
	 * and reveals them on the screen.
	 * @param {string} letter - The letter selected by the user.
	 */
	showMatchedLetter(letter) {
		const matchedLetters = document.querySelectorAll(`.${letter}`);
		matchedLetters.forEach((letter) => {
			letter.classList.remove('hide');
			letter.classList.add('show');
		});
	}
}
