// WPU Coding Challenge 2024
// 17/366
// URL : https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// const areaOrPerimeter = function(l , w) {
//     if (l === w) {
//         return l * w;
//     } else {
//         return 2 * (l + w);
//     }
// };


// const areaOrPerimeter = function(l , w) {
//     return l === w ? l * w : 2 * (l + w);
// };


const areaOrPerimeter = (l , w) => l === w ? l * w : 2 * (l + w);


console.log(areaOrPerimeter(6, 10))