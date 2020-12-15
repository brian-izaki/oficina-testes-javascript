const fizzBuzz = require('./fizzbuzz');

describe('Grupo de testes do FizzBuzz', () => {

  test('deveria mostrar 7 quando o numero for 7', ()=> {
    const resultado = fizzBuzz(7)
    expect(resultado).toEqual(7)
  });

  test('deveria mostrar Fizz pra multiplo de 3 ', () => {
    const result = fizzBuzz(3);
    expect(result).toEqual('Fizz')
    expect(result).toEqual('Fizz')
  });

  test('deveria mostrar Buzz pra multiplo de 5', () => {
    const resultado = fizzBuzz(5)
    expect(resultado).toEqual('Buzz')
  });

  test('deveria mostrar FizzBuzz pro numero que é multiplo de 3 e 5', () => {
    const resultado = fizzBuzz(15)
    expect(resultado).toEqual('FizzBuzz')
  });

});