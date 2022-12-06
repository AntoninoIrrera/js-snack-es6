/*


Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.





*/

const persone = [
    {
        nome : "Fabio",
        cognome : "Volabasso",
        age : 22
    },
    {
        nome: "Luca",
        cognome: "Altasfera",
        age: 34
    },
    {
        nome: "Alessio",
        cognome: "Luigini",
        age: 5
    },
    {
        nome: "Luigi",
        cognome: "Sturna",
        age: 75
    },
    {
        nome: "Francesco",
        cognome: "Storti",
        age: 10
    },
    {
        nome: "Michele",
        cognome: "Ventura",
        age: 22
    },
    {
        nome: "Luca",
        cognome: "Fertrinelli",
        age: 16
    },
    {
        nome: "Dennis",
        cognome: "Trovato",
        age: 44
    },
    {
        nome: "Andrea",
        cognome: "Voi",
        age: 17
    },
    {
        nome: "Daniele",
        cognome: "Schininà",
        age: 18
    }
]

let guidare;
const personeNuove = [];


persone.forEach(persona => {

    personeNuove.push(persona)

    

});


personeNuove.forEach((personaNuova) => {

    if (personaNuova.age >= 18) {

        guidare = true;

    } else {
        guidare = false;
    }

    if (guidare) {
        guidare = "si";
    } else {
        guidare = "no";
    }

    console.log(personaNuova.nome + " " + personaNuova.cognome + " " + "Può guidare?" + " " + guidare)



})







