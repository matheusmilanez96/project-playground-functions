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
function fizzBuzz(array) {
  const novoArray = []
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      novoArray.push(`fizzBuzz`);
    } else if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      novoArray.push(`fizz`);
    } else if (array[i] % 3 !== 0 && array[i] % 5 === 0) {
      novoArray.push(`buzz`);
    } else {
      novoArray.push(`bug!`);
    }
  }
  return novoArray;
}

// Desafio 9
function encode(frase) {
  let novaFrase = "";
  for (let i in frase) {
    if (frase[i] === 'a') {
      novaFrase = novaFrase.concat('1');
    } else if (frase[i] === 'e') {
      novaFrase = novaFrase.concat('2');
    } else if (frase[i] === 'i') {
      novaFrase = novaFrase.concat('3');
    } else if (frase[i] === 'o') {
      novaFrase = novaFrase.concat('4');
    } else if (frase[i] === 'u') {
      novaFrase = novaFrase.concat('5');
    } else {
      novaFrase = novaFrase.concat(frase[i]);
    }
  }
  return novaFrase;
}
function decode(frase) {
  let novaFrase = "";
  for (let i in frase) {
    if (frase[i] === '1') {
      novaFrase = novaFrase.concat('a');
    } else if (frase[i] === '2') {
      novaFrase = novaFrase.concat('e');
    } else if (frase[i] === '3') {
      novaFrase = novaFrase.concat('i');
    } else if (frase[i] === '4') {
      novaFrase = novaFrase.concat('o');
    } else if (frase[i] === '5') {
      novaFrase = novaFrase.concat('u');
    } else {
      novaFrase = novaFrase.concat(frase[i]);
    }
  }
  return novaFrase;
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
