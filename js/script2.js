

/*

 
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.


*/


const auto = [
panda = {
    marca : "fiat",
    modello : "panda",
    alimentazione : "benzina"
}, q8 = {
    marca: "alfaRomeo",
    modello: "q8",
    alimentazione: "gpl"
}, giulietta = {
    marca: "alfaRomeo",
    modello: "giulietta",
    alimentazione: "diesel"
}, cinquecento = {
    marca: "fiat",
    modello: "500",
    alimentazione: "benzina"
}, ignis = {
    marca: "suzuki",
    modello: "ignis",
    alimentazione: "elettrico"
}, focus = {
    marca: "ford",
    modello: "focus",
    alimentazione: "metano"
}, fiesta = {
    marca: "ford",
    modello: "fiesta",
    alimentazione: "benzina"
}, cMax = {
    marca: "ford",
    modello: "c-max",
    alimentazione: "diesel"
}, up = {
    marca: "volkswagen",
    modello: "up",
    alimentazione: "gpl"
}, camaro = {
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
