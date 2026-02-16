let familieleden = ["sander", "jasper", "Lucas", "Jona", "Bent"]

console.log(familieleden.length);
console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);

const VoegNaamToe = (array) => {
    let naam = prompt("Voeg een naam toe:");
    array.push(naam);
};
VoegNaamToe(familieleden);
console.log(familieleden);
console.log(familieleden);
let alsString = familieleden.toString();
console.log(alsString);