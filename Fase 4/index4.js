// Crea una altra array amb el teu cognom on cada posició correspongui a una lletra.
// Fusiona els dos arrays en un. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de 'array name i surname i al acabar l’execució només tindrem una que es dirà fullName.

let name = ("Donatella").toUpperCase();
let surname = ("Carta").toUpperCase();
let fullName = (name + " " + surname).split("");

console.log(fullName);

