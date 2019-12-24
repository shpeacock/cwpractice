var generateRange = (min, max, step) => {
    const array = [];
    for(i = min; i <= max; i+=step){
        array.push(i);
    }
    return array;
}

console.log(generateRange(2, 10, 2));