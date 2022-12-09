const isArmstrong = (num) => {
  let potencyNum = String(num).split("")
  .reduce((acc, act) => acc + act**(String(num).length), 0)
  
  return potencyNum === num
}

isArmstrong(371)
