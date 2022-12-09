const removeAccents = (word) => {
    word = word.toLowerCase();
    word = word.replace(new RegExp(/\s/g),"");
    word = word.replace(new RegExp(/[àáâãäå]/g),"a");
    word = word.replace(new RegExp(/æ/g),"ae");
    word = word.replace(new RegExp(/ç/g),"c");
    word = word.replace(new RegExp(/[èéêë]/g),"e");
    word = word.replace(new RegExp(/[ìíîï]/g),"i");
    word = word.replace(new RegExp(/ñ/g),"n");                
    word = word.replace(new RegExp(/[òóôõö]/g),"o");
    word = word.replace(new RegExp(/œ/g),"oe");
    word = word.replace(new RegExp(/[ùúûü]/g),"u");
    word = word.replace(new RegExp(/[ýÿ]/g),"y");
    word = word.replace(new RegExp(/\W/g),"");
    return word;
};

const isPalindrome = (word) => {
  word = removeAccents(word).split(/[^a-z]/).join("")
  return (word === word.split("").reverse().join(""))
}

isPalindrome("Ana lleva al oso la avellana.")
