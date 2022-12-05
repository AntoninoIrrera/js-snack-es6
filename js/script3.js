


/*


     Crea 10 oggetti che rappresentano una zucchina, 
 indicandone per ognuno varietà, peso e lunghezza.

 Calcola quanto pesano tutte le zucchine.





*/


const zucchine = [

    {
        varieta : "non ho capito",
        peso : 22,
        lunghezza : 53

    },

    {
        varieta: "non ho capito",
        peso: 75,
        lunghezza: 534

    },
    {
        varieta: "non ho capito",
        peso: 98,
        lunghezza: 75

    },
    {
        varieta: "non ho capito",
        peso: 11,
        lunghezza: 8

    },
    {
        varieta: "non ho capito",
        peso: 4,
        lunghezza: 10

    },
    {
        varieta: "non ho capito",
        peso: 45,
        lunghezza: 14

    },
    {
        varieta: "non ho capito",
        peso: 254,
        lunghezza: 65

    },
    {
        varieta: "non ho capito",
        peso: 44,
        lunghezza: 25

    },
    {
        varieta: "non ho capito",
        peso: 78,
        lunghezza: 441

    },
    {
        varieta: "non ho capito",
        peso: 116,
        lunghezza: 85

    }


]


let somma = 0;

for(let i = 0; i < zucchine.length; i++){


    somma = somma + zucchine[i].peso;


}

console.log(somma + " kg");