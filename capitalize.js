function capitalize(string) {
  finalArray = []
  firstItem = string.split('').map((letter, i) => i%2 ? letter.toLowerCase(): letter.toUpperCase()).join('');
  finalArray.push(firstItem);
  secondItem = string.split('').map((letter, i) => i%2 ?  letter.toUpperCase(): letter.toLowerCase()).join('');
  finalArray.push(secondItem);
  return finalArray;
};
  

console.log(capitalize("abcdef"));
console.log(capitalize("codewars"));
console.log(capitalize("abracadabra"));
console.log(capitalize("codewarriors"));
