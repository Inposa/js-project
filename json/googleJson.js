const googleData = require("./google.json");

const founders = googleData.founders;

for (let i in founders) {
  console.log(founders[i]);
}

const chiffreAffaire = googleData.chiffreAffaire;

for (let i in chiffreAffaire) {
  console.log(chiffreAffaire[i]);
}
