// WPU Coding Challenge 2024
// 14/366
// URL : https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// function getGrade (s1, s2, s3) {
//     let avg = (s1 + s2 + s3) / 3;
//     if (avg >= 90) {
//       return 'A';
//     } else if (avg >= 80) {
//       return 'B';
//     } else if (avg >= 70) {
//       return 'C';
//     } else if (avg >= 60) {
//       return 'D';
//     } else {
//       return 'F';
//     }
// }

// function getGrade (...s) {
//     const score = s.reduce((acc, curr) => acc + curr) / s.length;
//     if (score < 60) return 'F';
//     if (score < 70) return 'D';
//     if (score < 80) return 'C';
//     if (score < 90) return 'B';
//     return 'A';
// }

// function getGrade(s1, s2, s3) {
//     var s = (s1 + s2 + s3) / 3;
//     return s >= 90 ? 'A' : s >= 80 ? 'B' : s >= 70 ? 'C' : s >= 60 ? 'D' : 'F';
// }

// const getGrade = (s1, s2, s3) => (s1 + s2 + s3) / 3 >= 90 ? 'A' : (s1 + s2 + s3) / 3 >= 80 ? 'B' : (s1 + s2 + s3) / 3 >= 70 ? 'C' : (s1 + s2 + s3) / 3 >= 60 ? 'D' : 'F';

var getGrade=(a,b,c)=>'FFFFFFDCBAA'.charAt((a+b+c)/3/10);



console.log(getGrade(95, 90, 93));