function persistence(num) {
    //code me
    var i = num.toString().length;
    var count = 0;
    if(i > 1){
        do{
            num = [...num.toString()].reduce((p, v) => p * v);
    
            i--;
            count++;
        }
        while(num.toString().length > 1);
            return count;
    } else {
        return 0;
    }


 }

 console.log(persistence(39));
 console.log(persistence(4));
 console.log(persistence(25));
 console.log(persistence(999));
