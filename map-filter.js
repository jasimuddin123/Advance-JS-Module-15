// As usual we are making square 
// const numbers = [3, 4, 5, 10, 7, 6];

// const output = [];
// for(let i = 0; i < numbers.length; i++){

//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);

// Using "Map" to make easy above job

// const age = [3, 5, 6, 7, 8, 9];

// function square(element){
//     return element * element;
// }

// age.map(function (element, index, array){

//     console.log(element, index, array);
// })

const numbers = [2, 4, 5, 6, 7, 8, 9];

function squareCheck(value){
    return value * value;
}

const result = numbers.map(function (value){
    return value * value;
})

console.log(result);

// Using "Map" by using Arrow function 

const allNumber = [2, 3, 4, 5, 6,7, 8, 9, 10]

const total = allNumber.map(x => x * x);
console.log(total);

// how to use filter "filter" 

const amount = [1, 2, 9, 10];

const bigger = amount.filter( x => x < 10);

console.log(bigger);

// how to use Find "Find"

const Tnumber = [20, 33, 40, 50, 66, 77, 88];

const isThere = Tnumber.find( x => x > 10);
console.log(isThere);