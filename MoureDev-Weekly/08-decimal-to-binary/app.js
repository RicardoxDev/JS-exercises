const decToBin = (dec) => {
  let bin = ""
  while(dec > 0) {
    if(dec % 2 === 0) {
      bin += "0"
      dec /= 2
    } else if (dec % 2 === 1){
      bin += "1"
      dec = (dec - 1)/2
    } else {
      bin += "1"
      dec -= 1
    }
  }
  return Number(bin.split("").reverse().join(""))
}
