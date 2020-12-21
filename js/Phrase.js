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
}
