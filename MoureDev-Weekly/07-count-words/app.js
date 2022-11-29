const countWords = (words) => {
  words = words.toLowerCase().replaceAll(".", "").split(" ")
  let countedWords = {}
  
  for(let i = 0; i < words.length; i++) {
    if(!countedWords[words[i]]) countedWords[words[i]] = 0
    if(words.indexOf(words[i], i) !== -1) countedWords[words[i]]++
  }
  
  return countedWords
}
