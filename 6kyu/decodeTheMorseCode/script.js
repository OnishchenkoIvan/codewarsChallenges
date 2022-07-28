decodeMorse = function(morseCode){
  const words = morseCode.trim().split('   ');
  console.log(words);
  const word = words.map((item) => {
    return item.split(' ');
  });
  const decryptionWord = word.map((item) => {
    return item.map((it) => {
      return MORSE_CODE[it]
    })
  })
  const addWords = decryptionWord.map((item) => {
    return item.join('');
  })
  return addWords.join(' ');
}