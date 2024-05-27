// WPU Coding Challenge 2024
// 25/366
// URL : https://www.codewars.com/kata/56b1f01c247c01db92000076


// function doubleChar(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         result += str[i] + str[i];
//     }
//     return result
// }

// function doubleChar(str) {
//     return str.split('').map((el) => el + el).join('');
// }

// function doubleChar(str) {
//     return [...str].map((el) => el + el).join('');
// }

// const doubleChar = (str) => [...str].map((el) => el + el).join('');

const doubleChar = (str) => str.replace(/./g, "$&$&");

console.log(doubleChar("Adidas"));