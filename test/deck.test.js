var expect = require('chai').expect;

describe('deck', function () {
  it('exists', function () {
    var main = require('../lib/deck');
    expect(main).to.have.property('Client')
      .and.to.be.a('function');
  });


  describe('client', function () {
    var Deck;
    var deck;

    beforeEach(function () {
      Deck = require('../lib/deck').Client;
      deck = new Deck();
    });

    describe('construction', function () {
      it('is able to default construct', function () {
        expect(deck).to.be.ok;
      });

      it('is able to construct with a given array', function () {
        deck = new Deck([1, 2, 3]);
        expect(deck).to.be.ok;
      });

      it('has the correct API', function () {
        var api = [
          'add',
          'draw',
          'scry',
          'shuffle',
          'size'
        ];

        api.forEach(function (endpoint) {
          expect(deck).to.have.property(endpoint);
        });
      });
    });

    describe('size', function () {
      it('has a default size of 0', function () {
        expect(deck.size()).to.equal(0);
      });

      it('has an initialized size', function () {
        var size;

        deck = new Deck([1, 2, 3]);
        size = deck.size();
        expect(size).to.equal(3);
      });
    });

    describe('add', function () {
      it('can add cards', function () {
        var result;
        var size;

        expect(deck.size()).to.equal(0);
        result = deck.add(123);

        expect(result).to.equal(123);
        expect(deck.size()).to.equal(1);
      });
    });

    describe('scry', function () {
      beforeEach(function () {
        deck = new Deck([1, 2, 3]);
      });

      it('can scry cards', function () {
        var result;

        result = deck.scry();
        expect(result).to.equal(3);
        expect(deck.size()).to.equal(3);
      });

      it('can scry more than 1 card', function () {
        var result = deck.scry(2);

        expect(result).to.deep.equal([3, 2]);
      });

      it('returns nothing if scrying from an empty deck', function () {
        deck = new Deck();
        result = deck.scry();

        expect(result).to.be.not.ok;
      });

      it('returns everything if scrying too many cards from the deck', function () {
        var result = deck.scry(4);
        expect(result).to.deep.equal([3, 2, 1]);
      });
    });

    describe('draw', function () {
      beforeEach(function () {
        deck = new Deck([7, 8, 9]);
      });

      it('can draw from the top of the deck', function () {
        var result;

        expect(deck.size()).to.equal(3);
        result = deck.draw();
        expect(result).to.equal(9);
        expect(deck.size()).to.equal(2);
      });

      it('can draw more than one card', function () {
        var result;

        expect(deck.size()).to.equal(3);

        result = deck.draw(2);
        expect(result).to.deep.equal([9, 8]);
      });

      it('returns nothing if drawing from an empty deck', function () {
        var result;

        deck = new Deck();
        result = deck.draw();
        expect(result).to.be.not.ok;
      });
    });

    describe('shuffle', function () {
      it('shuffles the deck', function () {
        var compare;
        var result;
        var secondComparison;
        deck = new Deck([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        result = deck.shuffle();
        expect(result).to.be.true;
        comparison = deck.scry(10);
        expect(comparison).to.not.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        deck.shuffle();
        secondComparison = deck.scry(10);
        expect(secondComparison).to.not.deep.equal(comparison);
      });
    });
  });
});