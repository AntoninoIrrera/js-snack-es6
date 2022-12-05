

/*

 
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.


*/


const auto = [
{
    marca : "fiat",
    modello : "panda",
    alimentazione : "benzina"
},{
    marca: "alfaRomeo",
    modello: "q8",
    alimentazione: "gpl"
}, {
    marca: "alfaRomeo",
    modello: "giulietta",
    alimentazione: "diesel"
},  {
    marca: "fiat",
    modello: "500",
    alimentazione: "benzina"
},  {
    marca: "suzuki",
    modello: "ignis",
    alimentazione: "elettrico"
}, {
    marca: "ford",
    modello: "focus",
    alimentazione: "metano"
},  {
    marca: "ford",
    modello: "fiesta",
    alimentazione: "benzina"
},  {
    marca: "ford",
    modello: "c-max",
    alimentazione: "diesel"
},  {
    marca: "volkswagen",
    modello: "up",
    alimentazione: "gpl"
},  {
    marca: "chevrolet",
    modello: "camaro",
    alimentazione: "diesel"
}];

const benzina = [];
const diesel = [];
const altreAlimentazioni = [];


for( let i = 0; i < auto.length; i++){

    if(auto[i].alimentazione == "benzina"){
        benzina.push(auto[i].modello);
    } else if (auto[i].alimentazione == "diesel"){
        diesel.push(auto[i].modello);
    }else{
        altreAlimentazioni.push(auto[i].modello);
    }

}


console.log(benzina);
console.log(diesel);
console.log(altreAlimentazioni);
