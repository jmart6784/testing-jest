export const capitalize = (string) => {
  let tempAry = [];
  let splitStr = string.split(" ");

  splitStr.forEach((word) => {
    let letterAry = word.split("");
    let capital = letterAry[0].toUpperCase();

    letterAry.shift();
    letterAry.unshift(capital);
    let finalWord = letterAry.join("");
    tempAry.push(finalWord);
  });

  return tempAry.join(" ");
};

export const reverse = (string) => {
  let words = string.split(" ");
  let reversed = [];

  words.forEach((word) => {
    let revesedWord = [];
    let letters = word.split("");

    for (let i = letters.length - 1; i !== -1; i--) {
      const letter = letters[i];
      revesedWord.push(letter);
    }
    reversed.push(revesedWord.join(""));
  });
  return reversed.join(" ");
};

export const calculator = {
  add: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },

  multiply: (a, b) => {
    return a * b;
  },

  divide: (a, b) => {
    return a / b;
  },
};

export const cipher = (string, shift) => {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let shiftCharacter = (shift, alphabetIndex) => {
    if (26 + shift > alphabet.length) {
      return alphabet[((alphabetIndex + shift) % 26) - 1];
    } else {
      return alphabet[alphabetIndex + shift - 1];
    }
  };

  let codedString = [];
  let lowcase = string.toLowerCase();

  let words = lowcase.split(" ");

  words.forEach((word) => {
    let letters = word.split("");
    let codedWord = [];

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];

      switch (letter) {
        case "a":
          codedWord.push(shiftCharacter(shift, 1));
          break;
        case "b":
          codedWord.push(shiftCharacter(shift, 2));
          break;
        case "c":
          codedWord.push(shiftCharacter(shift, 3));
          break;
        case "d":
          codedWord.push(shiftCharacter(shift, 4));
          break;
        case "e":
          codedWord.push(shiftCharacter(shift, 5));
          break;
        case "f":
          codedWord.push(shiftCharacter(shift, 6));
          break;
        case "g":
          codedWord.push(shiftCharacter(shift, 7));
          break;
        case "h":
          codedWord.push(shiftCharacter(shift, 8));
          break;
        case "i":
          codedWord.push(shiftCharacter(shift, 9));
          break;
        case "j":
          codedWord.push(shiftCharacter(shift, 10));
          break;
        case "k":
          codedWord.push(shiftCharacter(shift, 11));
          break;
        case "l":
          codedWord.push(shiftCharacter(shift, 12));
          break;
        case "m":
          codedWord.push(shiftCharacter(shift, 13));
          break;
        case "n":
          codedWord.push(shiftCharacter(shift, 14));
          break;
        case "o":
          codedWord.push(shiftCharacter(shift, 15));
          break;
        case "p":
          codedWord.push(shiftCharacter(shift, 16));
          break;
        case "q":
          codedWord.push(shiftCharacter(shift, 17));
          break;
        case "r":
          codedWord.push(shiftCharacter(shift, 18));
          break;
        case "s":
          codedWord.push(shiftCharacter(shift, 19));
          break;
        case "t":
          codedWord.push(shiftCharacter(shift, 20));
          break;
        case "u":
          codedWord.push(shiftCharacter(shift, 21));
          break;
        case "v":
          codedWord.push(shiftCharacter(shift, 22));
          break;
        case "w":
          codedWord.push(shiftCharacter(shift, 23));
          break;
        case "x":
          codedWord.push(shiftCharacter(shift, 24));
          break;
        case "y":
          codedWord.push(shiftCharacter(shift, 25));
          break;
        case "z":
          codedWord.push(shiftCharacter(shift, 26));
          break;
        default:
          codedWord.push(letter);
          break;
      }
    }

    codedString.push(codedWord.join(""));
  });

  return codedString.join(" ");
};

export const stats = (numbers) => {
  const average = () => {
    let sum = numbers.reduce((a, b) => a + b, 0);
    let average = sum / numbers.length;
    return average;
  };

  const min = () => {
    return Math.min(...numbers);
  };

  const max = () => {
    return Math.max(...numbers);
  };

  const length = () => {
    return numbers.length;
  };

  return {
    average: average(),
    min: min(),
    max: max(),
    length: length(),
  };
};
