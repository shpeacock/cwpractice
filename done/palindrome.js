function isPali(string){
    if(string.split('').reverse().join('') === string){
        return true
    }
    else{
        return false;
    }

    // smarter funner way 
    return (String(line) == String(line).split('').reverse().join('') )
}

console.log(isPali('fuck'));
console.log(isPali('racecar'));