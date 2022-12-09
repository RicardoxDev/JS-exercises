const morseDic = {
"A": "·—",
"B": "—···",
"C": "—·—·",
"CH": "————",
"D": "—··",
"E": "·",
"F": "··—·",
"G": "——·",
"H": "····",
"I": "··",
"J": "·———",
"K": "—·—",
"L": "·—··",
"M": "——",
"N": "—·",
"Ñ": "——·——",
"O": "———",
"P": "·——·",
"Q": "——·—",
"R": "·—·",
"S": "···",
"T": "—",
"U": "··—",
"V": "···—",
"W": "·—— ",
"X": "—··—",
"Y": "—·——",
"Z": "——··",
"0": "—————",
"1": "·————",
"2": "··———",
"3": "···——",
"4": "····—",
"5": "·····",
"6": "—····",
"7": "——···",
"8": "———··",
"9": "————·",
".": "·—·—·—",
",": "——··——",
"?": "··——··",
'"': "·—··—·",
"/": "—··—·",
" ": " "
}

const stringToMorse = (string) => {
  let text = ""
  if(new Set(string.split("")).size > 3) {
    string.split("").forEach( (char) => {
      text += morseDic[char.toUpperCase()]
      text += " "
    })
  } else {
    string.split(" ").forEach( (sign) => {
      if(!sign) text += " "
      Object.entries(morseDic).forEach(([prop, val]) => {
        if(val === sign) text += prop
      })
    })
  }
  
  return text.trim()
}

stringToMorse('RicardoDev')
