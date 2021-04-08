var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log("chilometri", chilometri);

var eta = parseInt(prompt("Quanti anni hai?"));
console.log("eta", eta);

var biglietto = (0.21);

if (Number.isNaN(chilometri) || Number.isNaN(eta)) {
    alert("Dati mancanti")
} else {
    if (eta < 18) {
        //applico uno sconto del 20%
        var prezzo = chilometri * biglietto;
        var risultato = prezzo - prezzo*0.2;
        //Stampo il risultato
        console.log("risultato", risultato.toFixed(2));
        document.getElementById("prezzo_biglietto").innerHTML = risultato.toFixed(2)
    } else if (eta >= 18 && eta < 65) {
        //nessuno sconto
        var prezzo = chilometri * biglietto;
        //Stampo il risultato
        console.log("prezzo", prezzo.toFixed(2));
        document.getElementById("prezzo_biglietto").innerHTML = prezzo.toFixed(2)
    
    } else if (eta > 65) {
          //applico uno sconto del 40%
          var prezzo = chilometri * biglietto;
          var risultato = prezzo - prezzo*0.4;
          //Stampo il risultato 
          console.log("risultato", risultato.toFixed(2));
          document.getElementById("prezzo_biglietto").innerHTML = risultato.toFixed(2)
    }
} 







  




