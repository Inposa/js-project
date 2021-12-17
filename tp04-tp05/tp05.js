//Retourne NaN, on peut pas multiplier deux chaines
//(et JS tente d'abord de concaténer les chaines de charactères)
const fonctionCalcul = (a, b) => {
  console.log(a, b);
  if (a == undefined || b == undefined) {
    throw "Les deux paramètres doivent être définits.";
  }

  if (typeof a != "number" || typeof b != "number") {
    throw "Les deux paramètres doivent être des nombres.";
  }
  return a * b + a + b;
};

//fonctionCalcul();

const controlTableau = (array) => {
  let i = 0;
  let value = true;

  if (array.length == 0) {
    return false;
  }

  while (value == true && i < array.length) {
    if (typeof array[i] != "number") {
      value = false;
    }
    i++;
  }
  return value;
};

const fonctionMoyenne = (array) => {
  if(!Array.isArray(array)){
    throw "Le paramètre d'entrée doit être un tableau.";
  }

  if (array.length == 0) {
    return 0;
  }

  if (!controlTableau(array)) {
    throw "Le tableau ne doit contenir que des nombres.";
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
};
