let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let min = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[0] < min) {
    min = array[0];
  }
}
console.log(min);
