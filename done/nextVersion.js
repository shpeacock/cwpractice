function nextVersion(version){
  //TODO : find the next version
    let arr = version.split(".").map(el => parseInt(el));
    for(var i = arr.length-1; i >=0; i--){
        if(arr[i] + 1 == 10 && i != 0){
          arr[i] = 0;
        }
        else if(arr[i] ==0 && arr.length >1 && i !=0) {
            continue;
        }
        else {
          arr[i]++;
          break;
        }
    }
    return arr.join(".");
}


console.log(nextVersion("1.2.3"));
console.log(nextVersion("0.9.9"));
console.log(nextVersion("1"));
console.log(nextVersion("1.2.3.4.5.6.7.8"));
console.log(nextVersion("9.9"));
console.log(nextVersion("100"));
console.log(nextVersion("10.0.0.0.0.0.0"));

