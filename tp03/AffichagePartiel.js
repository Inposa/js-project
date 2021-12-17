let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let result = "";
for (let i = 0; i < Array.length; i++) {
  if (array[i] > 3) {
    result += array[i] + ", ";
  }
}
console.log(result);

result = "";
for (let i = 0; i < Array.length; i++) {
  if (array[i] % 2 == 0) {
    result += array[i] + ", ";
  }
}
console.log(result);

result = "";
for (let i = 0; i < Array.length; i++) {
  if (i % 2 == 1) {
    result += array[i] + ", ";
  }
}
console.log(result);

result = "";
for (let i = 0; i < Array.length; i++) {
  if (array[i] % 2 == 1) {
    result += array[i] + ", ";
  }
}
console.log(result);
