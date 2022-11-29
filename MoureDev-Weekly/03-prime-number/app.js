const primNumber = (n) => {
  let isPrim = true
  let numbers = []
  for(let i = 2; i <= n; i++) {
    for(let idx = 2; idx < i; idx++) {
      if(i === idx) continue
      if(i % idx === 0) isPrim = false
    }
    
    if(isPrim === true) numbers.push(i)
    isPrim = true
  }
  
  return numbers
}
