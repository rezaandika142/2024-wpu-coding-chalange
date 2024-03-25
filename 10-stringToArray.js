// WPU Coding Challenge 2024
// 10/366
// URL : https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// function stringToArray(string){
//     var result = [];
//     var traverse = function foo(string){
//         for(var i=0;i<string.length;i++){
//             var chr = string.charAt(i);
//             if(chr === " "){
//                 result.push(string.slice(0,i));
//                 foo(string.slice(i+1));
//                 return;
//             }
//         }
//         result.push(string);
//     };
//     traverse(string);
//     return result;
// }

const stringToArray = (string) => string.split(' ');

console.log(stringToArray("I love arrays they are my favorite"));