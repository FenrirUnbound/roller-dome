var Hand = function (initialContents) {
  this.hand = initialContents || [];
};

Hand.prototype.discard = function (position) {
  var result = this.hand.splice(position, 1);
  return result.length <= 1 ? result.pop() : result;
};

Hand.prototype.reveal = function () {
  return this.hand.slice();
};

Hand.prototype.size = function () {
  return this.hand.length;
};

module.exports = Hand;
