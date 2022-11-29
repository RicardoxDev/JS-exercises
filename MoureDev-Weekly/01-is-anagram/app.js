const isAnagram = (firstString, secondString) => {
  if(firstString === secondString) return false
  if(firstString.split("").sort().join("") === secondString.split("").sort().join("")) return true
  
  return false
}
