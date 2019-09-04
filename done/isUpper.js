String.prototype.isUpperCase = function() {
    // your code here
    // let str = this;
    // let isUpper = true;
    // for(var i = 0; i < str.length; i ++){
    //     if (str[i] == str[i].toUpperCase()){
    //         continue;
    //     }
    //     else{
    //         isUpper = false;
    //         break;
    //     }
    // }
    // return isUpper;

    //in one line now 
    return this==this.toUpperCase()
  }

console.log('fUck'.isUpperCase());
console.log('FUCK'.isUpperCase());
console.log('the QuICK BRown Cow'.isUpperCase());
console.log('EVERYBODY PARTY'.isUpperCase());