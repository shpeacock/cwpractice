function nextVersion(version){
    //TODO : find the next version
    let split = version.split('.');
    for(var i = split.length-1; i >=0; i--){
        if(9> split[i] > 0 ){
            split[i]++;
            break;
        }
        else if(split[i]==9 && i != 0){
            split[i] = 0;
        }
    }
    split = split.join('.');
    console.log(split);
  }

nextVersion('1.2.3');
nextVersion('1.2.9');
nextVersion('1.9.9');