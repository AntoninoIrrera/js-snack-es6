
/*

    Crea un array di oggetti che rappresentano degli animali.
    Ogni animale ha un nome, una famiglia e una classe.
    Es:  [
      { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
      { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
      { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]  Crea un nuovo array con la lista dei mammiferi.
    Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI


*/



const animali = [
    {
        nome : "leone",
        famiglia : "felidi",
        classe : "mammiferi"
    },
    {
        nome: "cane",
        famiglia: "canidi",
        classe: "mammiferi"
    },
    {
        nome: "gallina",
        famiglia: "fasianidi",
        classe: "uccelli"
    },
    {
        nome: "ghepardo",
        famiglia: "felidi",
        classe: "mammiferi"
    },
    {
        nome: "gallo",
        famiglia: "felidi",
        classe: "uccelli"
    },
    {
        nome: "tigre",
        famiglia: "felidi",
        classe: "mammiferi"
    },
    {
        nome: "pappagallo",
        famiglia: "felidi",
        classe: "uccelli"
    },
    {
        nome: "gatto",
        famiglia: "felidi",
        classe: "mammiferi"
    },
    {
        nome: "pantera",
        famiglia: "felidi",
        classe: "mammiferi"
    },
    {
        nome: "acquila",
        famiglia: "felidi",
        classe: "uccelli"
    }
]



const animaliMammiferi = animali.filter((animale) => {

    if(animale.classe == "mammiferi"){
        return true;
    }

    return false;

})

console.log(animaliMammiferi);


const animaliMammiferiUppercase = animaliMammiferi.map((mammifero) => {

    mammifero.nome = mammifero.nome.charAt(0) + mammifero.nome.substring(1).toUpperCase();
    mammifero.famiglia = mammifero.famiglia.charAt(0) + mammifero.famiglia.substring(1).toUpperCase();
    mammifero.classe = mammifero.classe.charAt(0) + mammifero.classe.substring(1).toUpperCase();

    return mammifero;
})


console.log(animaliMammiferiUppercase);