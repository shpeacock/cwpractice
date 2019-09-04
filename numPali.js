function palindrome(num) { 
    //Code goes here
    if(typeof(num) != 'number' && num > 0){
        return "Not Valid";
    }
    else{
        return num ==  Array.from(String(num), Number).reverse().join('');
    }
}

// console.log(palindrome(1221));
// console.log(palindrome(123322));
// console.log(palindrome("ACCDDCCA"));
console.log(palindrome("1221"));
// console.log(palindrome(-450),"Not valid");