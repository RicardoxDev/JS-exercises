const recursiveFactorial = (num) => {
  let result = num
  if(num > 2) result *= recursiveFactorial(num - 1)
  return result
}

recursiveFactorial(7)
