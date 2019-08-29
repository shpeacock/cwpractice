function createPhoneNumber(numbers){
    var formatPhone = [];
    for(var i=0; i<numbers.length; i++){
      if(i === 0){
        formatPhone.push('(' + numbers[i]);
      } else if(i === 2){
        formatPhone.push(numbers[i] + ')');
      } else if(i === 3){
        formatPhone.push(' ' + numbers[i]);
      } else if(i === 5){
        formatPhone.push(numbers[i] + '-');
      } else {
        formatPhone.push(numbers[i]);
      }
    }
    
    return formatPhone.join('');
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));