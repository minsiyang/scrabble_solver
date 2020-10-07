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

  it('returns 3 when passes "b" ', () => {
    const scrabble = new Scrabble('b');
    expect(scrabble.score()).toBe(3);
  })

  it('returns 5 when passes "af" ', () => {
    const scrabble = new Scrabble('af');
    expect(scrabble.score()).toBe(5);
  })

  it('returns 6 when passes "awe" ', () => {
    const scrabble = new Scrabble('awe');
    expect(scrabble.score()).toBe(6);
  })

  it('returns 6 when passes "STREET" ', () => {
    const scrabble = new Scrabble('STREET');
    expect(scrabble.score()).toBe(6);
  })

  it('returns 0 when passes " " ', () => {
    const scrabble = new Scrabble(' ');
    expect(scrabble.score()).toBe(0);
  })

  it('returns 0 when passes null ', () => {
    const scrabble = new Scrabble(null);
    expect(scrabble.score()).toBe(0);
  })

  it('returns 0 when passes string with special characters ', () => {
    const scrabble = new Scrabble(" \t\n");
    expect(scrabble.score()).toBe(0);
  })
  
})