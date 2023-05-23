const array = [1,2,3,14,46,15, [1,2,34,5, [1,55,25,65]]];
console.log(array.flat(3));

//flatmap

const array2 =[1,2,3,4,5]
console.log(array2.flatMap(v => [v, v * 2]));