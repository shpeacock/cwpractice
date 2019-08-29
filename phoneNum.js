function createPhoneNumber(numbers){
    // var formatPhone = [];
    // for(var i=0; i<numbers.length; i++){
    //   if(i === 0){
    //     formatPhone.push('(' + numbers[i]);
    //   } else if(i === 2){
    //     formatPhone.push(numbers[i] + ')');
    //   } else if(i === 3){
    //     formatPhone.push(' ' + numbers[i]);
    //   } else if(i === 5){
    //     formatPhone.push(numbers[i] + '-');
    //   } else {
    //     formatPhone.push(numbers[i]);
    //   }
    // }
    
    // return formatPhone.join('');

    //other fun ways to solve 
    //1
        // numbers = numbers.join('');
        // return '(' + numbers.substring(0, 3) + ') ' 
        //     + numbers.substring(3, 6) 
        //     + '-' 
        //     + numbers.substring(6);

    //smartest way I found 
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));