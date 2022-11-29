const fibonacci = (n) => {
  let currentNum = 0
  let lastNum = 1
  let latestNum = 0
  let sucesion = []
  
  for(let i = 0; i < n; i++) {
    sucesion.push(currentNum)
    latestNum = lastNum
    lastNum = currentNum
    currentNum = lastNum + latestNum
  }
  
  return sucesion
}
