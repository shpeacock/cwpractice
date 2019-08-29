function capitalize(s){
    s.toString('');
    for(i=0; i<= s.length;i++){
        if(s[i]%2 != 0){
            s[i].toUpperCase();
        }
    }
    return s;
  };

  console.log(capitalize('codewars'));