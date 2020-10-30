// Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
// Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número: __’

let name = ("Donatel7a").toUpperCase();
console.log("Let's start with the name " + name);

function letters(s) {
let vowels = ["A", "E", "I", "O", "U"];
let numbers = ["0", "1","2","3","4","5","6","7","8","9"];

for (let i = 0; i < s.length; i++) {

    if (numbers.includes(s[i])) {
    console.log("The name of the people doesn't contain the number: " + s[i]);
} else if (vowels.includes(s[i])){
    console.log("I found the vowel: " + s[i]);
}  else {
    console.log("I found the consonant: " + s[i]);
}

}
}

letters(name);



