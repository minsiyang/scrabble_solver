class Scrabble {
  constructor(string) {
    this.string = string;
    this.data = {
      A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
      D: 2, G: 2,
      B: 3, C: 3, M: 3, P: 3,
      F: 4, H: 4, V: 4, W: 4, Y: 4,
      K: 5,
      J: 8, X: 8,
      Q: 10, Z:10
    }
  }
    score() {
      let arr = this.string.toUpperCase().split("")
      let key = arr[0]
      let total = 0
  
      // console.log(arr) 
      if (arr.length === 1 && this.data[key]) {
        return this.data[key];
      }  else {
        total = this.data[arr[0]] + this.data[arr[1]]
        return total
      }
  }
}

module.exports = Scrabble;