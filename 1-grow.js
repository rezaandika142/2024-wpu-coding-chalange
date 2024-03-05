// function grow(x){
//     let result = x[0];
//     for (let i = 1; i < x.length; i++) {
//         // result = result * x[i];
//         result *= x[i];
//     }

//     return result;
// }

// function grow(x){
//     const result = x.reduce((acc, curr) => acc * curr, 1);
//     return result;
// }

// function grow(x){
//     return x.reduce((acc, curr) => acc * curr, 1);
// }

// const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

// const grow=x=> x.reduce((a,b) => a*b);

const grow=x=>eval(x.join("*"))

console.log(grow([1,2,3,4]))