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

Deck.prototype.size = function () {
    return this.deck.length;
};

module.exports = Deck;