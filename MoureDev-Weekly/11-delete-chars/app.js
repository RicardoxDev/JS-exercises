const deleteChars = (str1, str2) => {
  let maxLengthWord = [str1, str2].sort((a, b) => b.length - a.length)[0]
  let out1 = str1
  let out2 = str2
  
  maxLengthWord.split("").forEach((char, idx) => {
    out1 = out1.replaceAll(str2[idx], "")
    out2 = out2.replaceAll(str1[idx], "")  
  })
  
  return {
    out1: out1,
    out2: out2
  }
}

deleteChars("abcdefg", "gfai")
