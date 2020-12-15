function fizzBuzz(numero){

  const isMultipleOf3 = numero % 3 === 0;
  const isMultipleOf5 = numero % 5 === 0;
  let fizzBuzzWord = '';

  if (isMultipleOf3)
    fizzBuzzWord = 'Fizz'  

  if (isMultipleOf5)
    fizzBuzzWord += 'Buzz'

  return fizzBuzzWord || numero;
}

module.exports = fizzBuzz; 