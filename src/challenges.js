// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let count = 0;
  for (let i in array) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (let i in array) {
    if (array[i] === maiorNumero) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 < dist2) {
    return `cat1`
  } else if (dist1 > dist2) {
    return `cat2`
  } else {
    return `os gatos trombam e o rato foge`
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
