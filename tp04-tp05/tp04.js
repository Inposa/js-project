const fonctionConstance = () => {
  return 33;
};

const bonjourUntel = (nom) => {
  return "Bonjour " + nom;
};

//Retourne NaN, on peut pas multiplier deux chaines
//(et JS tente d'abord de concaténer les chaines de charactères)
const fonctionCalcul = (a, b) => {
  return a * b + a + b;
};

/*console.log(fonctionCalcul(1, 5));
console.log(fonctionCalcul("1", "5"));
console.log(fonctionCalcul(60, "test"));*/

const controlTableau = (array) => {
  let i = 0;
  let value = true;

  if (array.length == 0) {
    return false;
  }

  while (value == true && i < array.length) {
    if (typeof array[i] !='number') {
      value = false;
    }
    i++;
  }
  console.log(value);
  return value;
};

const fonctionMoyenne = (array) => {
  if (array.length == 0) {
    return 0;
  }

  if (!controlTableau(array)) {
    console.error("Le tableau ne doit contenir que des nombres.");
    return null;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
};
console.log(fonctionMoyenne([1, 2, 3, 4, 5]));
console.log(fonctionMoyenne([5, 6, "test"]));
console.log(fonctionMoyenne([]));

const fonctionMaj = (str) => {
  str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return str2;
};

const fonctionPhraseMaj = (phrase) => {
  array = phrase.split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] = fonctionMaj(array[i]);
  }

  return array.join(" ");
};

console.log(fonctionPhraseMaj("bonjour tout le monde"));
