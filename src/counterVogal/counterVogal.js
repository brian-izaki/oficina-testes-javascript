function handlerErrorNotString(words){
  if (typeof words !== "string") {
    throw "Erro: o que foi passado não é uma String";
  }
}

function handlerString(words){
  return words.split(" ").join("").toLowerCase();
}

function counterVogal(words) {

  try{
    handlerErrorNotString(words);

    const formatedWords = handlerString(words)
    // object literal
    const vogals = {
      'a': 'a',
      'e': 'e',
      'i': 'i',
      'o': 'o',
      'u': 'u',
      'default': ''
    }
    let letters = '';
  
    for (let letter of formatedWords) {
      letters += (vogals[letter] || vogals['default'])
    }
    
    return letters.length;

  } catch (error){
    return error;
  }
}

module.exports = counterVogal;
