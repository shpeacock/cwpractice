function nextVersion(version){
    //TODO : find the next version
    let split = version.split('.');
    for(var i = split.length-1; i = 0; i--){
        if(9> split[i] > 0 ){
            split[i]++;
            break;
        }
        else if(i >0 && split[i] ==9){
            split[i] = 0;
        }
        else if(i == 0 && split[i] ==9){
            split[i] = 10;
        }
    }
    split = split.join('.');
    return split;
  }


console.log(nextVersion("1.2.3"));
console.log(nextVersion("0.9.9"));
console.log(nextVersion("1"));
console.log(nextVersion("1.2.3.4.5.6.7.8"));
console.log(nextVersion("9.9"));