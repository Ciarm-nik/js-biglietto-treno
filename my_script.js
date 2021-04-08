var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log("chilometri", chilometri);

var età = parseInt(prompt("Quanti anni hai?"));
console.log("età", età);

var biglietto = (0.21);

if (età < 18) {
    //applico uno sconto del 20%
    var prezzo = chilometri * biglietto;
    var risultato = prezzo - prezzo*0.2;
    //Stampo il risultato
    console.log(risultato);
} else if (età > 18 && età <65) {
    //nessuno sconto
    var prezzo = chilometri * biglietto;
    //Stampo il risultato
    console.log(prezzo);
}



