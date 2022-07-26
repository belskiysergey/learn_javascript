const secret = {
  "!": [17],
  " ": [5, 10],
  "e": [1, 15],
  "o": [4, 8],
  "h": [0],
  "l": [2, 3, 13, 14, 16],
  "f": [6],
  "r": [7],
  "m": [9],
  "H": [11],
  "i": [12],
}

let result = [];

for (let letter in secret) {
  secret[letter].forEach((index) => {
    result[index] = letter;
  })
}

console.log(result.join(''));