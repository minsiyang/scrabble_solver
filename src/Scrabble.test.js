const Scrabble = require('./Scrabble')

describe('score', () => {

  it('returns 1 when passes "a" ', () => {
    const scrabble = new Scrabble('a');
    expect(scrabble.score()).toBe(1);
  })

  it('returns 2 when passes "d" ', () => {
    const scrabble = new Scrabble('d');
    expect(scrabble.score()).toBe(2);
  })

  it('returns 2 when passes "b" ', () => {
    const scrabble = new Scrabble('b');
    expect(scrabble.score()).toBe(3);
  })
})