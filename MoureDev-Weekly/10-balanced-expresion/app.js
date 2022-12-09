const balancedExpresion = (exp) => {
  exp = exp.split(/[^[\]{}()]/).join("")
  const brazes = {"{": "}", "[": "]", "(": ")"}
  let isValid = true
  
  if(exp.length % 2 !== 0) return false
  for(let idx = 0; idx < exp.length/2; idx++) {
    if(brazes[exp[idx]] !== exp[exp.length - idx - 1]) isValid = false
  }
  
  return isValid
}

balancedExpresion("{ [ a- ( c + d ) ] - 5 }") // true
balancedExpresion("[ { a- ( c + d ) } - 5 ]") // true
balancedExpresion("{ a- ( c + d ) ] - 5 }") // false
balancedExpresion("{ (a- [ c + d ) ] - 5 }") // false
balancedExpresion("{ (a- [ c + d ) } - 5 ]") // false
