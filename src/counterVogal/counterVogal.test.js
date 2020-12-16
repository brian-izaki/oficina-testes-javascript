const counterVogal = require('./counterVogal');

describe('Grupo unitário para contar vogal', () => {
  
  test('deveria contar vogais de uma palavra/frase', ()=> {
    const result = counterVogal('aeip ou');
    expect(result).toEqual(5);
  })

  test('deveria contar 8 vogais na frase "Ei Cade o pokemon"', ()=> {
    const result = counterVogal('Ei Cade o pokemon');
    expect(result).toEqual(8);
  })

  test('deveria mostrar erro se o parametro não for String', () => {
    const result = counterVogal(55);
    expect(result).toEqual('Erro: o que foi passado não é uma String');
  })

});