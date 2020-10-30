// Emmagatzemar en un objecte o una estructura Map (a la teva elecció) les lletres de l'array y el nombre de vegades que apareixen.

let name = ("Donatella").toUpperCase();
let letters = name.split("");
const lettersCountMap = new Map();

for (let i = 0; i < letters.length; i++) 
{
    if (!lettersCountMap[letters[i]]) {
        lettersCountMap[letters[i]] = 0;
    }
    lettersCountMap[letters[i]] ++;
}
console.log(lettersCountMap);
