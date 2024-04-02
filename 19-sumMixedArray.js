// WPU Coding Challenge 2024
// 19/366
// URL : https://www.codewars.com/kata/57eaeb9578748ff92a000009


// function sumMix(x){
//     let sum = 0
//     for (let i = 0; i < x.length; i++) {
//         sum += +x[i]
//     }
//     return sum
// }

// function sumMix(x){
//     return x.reduce((a, b) => +a + +b, 0)
// }

const sumMix = (x) => x.reduce((a, b) => +a + +b, 0);


console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))