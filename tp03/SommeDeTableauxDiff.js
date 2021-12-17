let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];

let array3 = [];

for (let i = 0; i < Math.max(array.length, array2.length); i++) {
  array3.push((array1[i] || 0) + array2[i] || 0);
}
console.log(array3);