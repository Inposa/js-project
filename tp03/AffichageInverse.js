let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let result = "";
for (let i = 0; i < array.length; i++) {
  result += array[i] + ", ";
}
console.log(result);

result = "";
for (let i = array.length; i >= 0; i--) {
  result += array[i] + ", ";
}
console.log(result);

let arrayCopy = [];
for(let i = 0; i < array.length; i++) {
    arrayCopy.push(array[i]);
}
console.log(arrayCopy);