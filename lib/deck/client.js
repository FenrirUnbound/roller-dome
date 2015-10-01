var Deck;

Deck = function (initialContents) {
    this.deck = initialContents || [];
};

Deck.prototype.add = function (card) {
    this.deck.push(card);
    return card;
};

Deck.prototype.draw = function (amount) {
    var count = amount || 1;
    var result = this.deck.splice(-count, count);
    return count === 1 ? result.pop() : result.reverse();
};

Deck.prototype.scry = function (amount) {
    var count = amount || 1;
    var result = this.deck.slice(-count);
    return count === 1 ? result.pop() : result.reverse();
};

Deck.prototype.shuffle = function () {
    var current = this.deck.length;
    var temp;
    var randomIndex;

    while (current !== 0) {
        randomIndex = Math.floor(Math.random() * current);
        current -= 1;

        temp = this.deck[current];
        this.deck[current] = this.deck[randomIndex];
        this.deck[randomIndex] = temp;
    }

    return true;
};

Deck.prototype.size = function () {
    return this.deck.length;
};

module.exports = Deck;