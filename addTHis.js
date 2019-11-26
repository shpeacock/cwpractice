var alphabet = 'abcdefghijklmnopqrstuvwxyz';
function addLetters(...letters) {
  var sum = 25;
  for (var letter of letters)
    sum += alphabet.indexOf(letter) + 1;
  return alphabet[sum % 26];  
}
console.log(addLetters('a','b','c'));
console.log(addLetters('a', 'b'));
console.log(addLetters('z'));
console.log(addLetters('z', 'a'));
console.log(addLetters('y', 'c', 'b'));