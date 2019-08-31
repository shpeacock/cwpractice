function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let average = classPoints.reduce((a,b) => a+b, 0)/ classPoints.length;
    if(yourPoints > average){
        return true;
    }
    else{
        return false;
    }
    //smarter way
    // return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }
  console.log(betterThanAverage([44,55,66], 50));
  console.log(betterThanAverage([44,55,66], 90));
  console.log(betterThanAverage([44,55,66], 10));