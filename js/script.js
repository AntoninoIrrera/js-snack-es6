

/*
1. ** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e`età`.
2. ** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti(ossìa oggetti con le proprietà sopra descritte) e mostriamoli.
*/


const studente = {

    nome : "Fabio",
    cognome : "Matto",
    age : 101,

}

const arrayOgettiStudenti = [];


for(let chiave in studente){

    console.log(chiave, ":" , studente[chiave]);

    
    arrayOgettiStudenti.push(studente[chiave]);
}


console.log(arrayOgettiStudenti);

