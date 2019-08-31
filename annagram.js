function anagrams(word, words) {
    const sanitizeString=(str)=> {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }
    return sanitizeString(word) == sanitizeString(words);
}

console.log(anagrams('listen','silent'));
console.log(anagrams('donald', 'barrack'));