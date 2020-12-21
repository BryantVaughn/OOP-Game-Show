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
		phrases.push(new Phrase('a dime a dozen'));
		phrases.push(new Phrase('beating around the bush'));
		phrases.push(new Phrase('i lost track of time'));
		phrases.push(new Phrase('actions speak louder than words'));
		phrases.push(new Phrase('i can live with that'));

		return phrases;
	}
}
