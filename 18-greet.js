// WPU Coding Challenge 2024
// 18/366
// URL : https://www.codewars.com/kata/5772da22b89313a4d50012f7


// function greet(name, owner) {
//     if (name === owner){
//         return 'Hello boss';
//     } else {
//         return 'Hello guest';
//     }
// }


// function greet (name, owner) {
//     return name === owner ? 'Hello boss' : 'Hello guest';
// }


const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';

console.log(greet('Daniel', 'Daniel'));
console.log(greet('Greg', 'Daniel'))