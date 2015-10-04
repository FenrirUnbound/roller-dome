var expect = require('chai').expect;

describe('hand', function () {
  it('exists', function () {
    var main = require('../lib/hand');
    expect(main).to.be.ok;
    expect(main).to.have.property('Client')
      .and.to.be.a('function');
  });

  describe('client', function () {
    var Hand;
    var hand;

    beforeEach(function () {
      Hand = require('../lib/hand').Client;
    });

    describe('construction', function () {
      beforeEach(function () {
          hand = new Hand();
      });

      it('has a default constructor', function () {
        expect(hand).to.be.ok;
      });

      it('constructs with a given array', function () {
        hand = new Hand([1, 2, 3]);
        expect(hand).to.be.ok;
      });

      it('has the correct API', function () {
        var api = [
          'discard',
          'reveal',
          'size'
        ];

        api.forEach(function (endpoint) {
          expect(hand).to.have.property(endpoint);
        });
      });
    });

    describe('size', function () {
      it('has a default size of 0', function () {
        var result = hand.size();
        expect(result).to.equal(0);
      });

      it('has an initialized size', function () {
        var result;

        hand = new Hand([1, 2, 3]);
        result = hand.size();
        expect(result).to.equal(3);
      });
    });

    describe('reveal', function () {
      beforeEach(function () {
        hand = new Hand([7, 8, 9]);
      });

      it('reveals the entire hand', function () {
        var results;

        results = hand.reveal();
        expect(results).to.deep.equal([7, 8, 9]);
      });

      it('reveals the entire hand by value', function () {
        var results;

        results = hand.reveal();
        expect(results).to.deep.equal([7, 8, 9]);

        results.push(2);
        results = hand.reveal();
        expect(results).to.not.contain(2);
      });
    });

    describe('discard', function () {
      it('discards and returns a specific card', function () {
        var result;
        hand = new Hand([7, 8, 9]);
        result = hand.discard(0);

        expect(result).to.equal(7);
        expect(hand.size()).to.equal(2);
      });

      it('returns nothing if the position is invalid', function () {
        var invalidPositions = [
          0,
          4
        ];
        var result;
        hand = new Hand();

        invalidPositions.forEach(function (position) {
          result = hand.discard(position);
          expect(result).to.be.not.ok;
        });
      });
    });
  });
});
