class RomanNumerals {
  static ROMAN_NUMERALS = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  static toRoman(number) {
    let result = "";
    for (const [numeral, value] of RomanNumerals.ROMAN_NUMERALS) {
      while (number >= value) {
        result += numeral;
        number -= value;
      }
    }
    return result;
  }

  static fromRoman(roman) {
    let result = 0;
    for (const [numeral, value] of RomanNumerals.ROMAN_NUMERALS) {
      while (roman.startsWith(numeral)) {
        result += value;
        roman = roman.substring(numeral.length);
      }
    }
    return result;
  }
}

console.log(RomanNumerals.fromRoman("XXI"));
console.log(RomanNumerals.toRoman(2500));
