/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

- chiedere km percorso e età del passeggero
    - prompt o input per km
    - prompt o input per età
- calcolo costo viaggio (1km = 0.21€)
    - calc km * costo/km
- sconto
    - se passeggero min -> 20% off
    - se passeggero over 65 -> 40% off
- display prezzo con massimo 2 decimali 
    - 2.433333 -> 2.43
*/

// prompt
const name = prompt('Inserisci il tuo nome');
const surname = prompt('Inserisci il tuo cognome');
const age = parseInt ( prompt('Inserisci la tua età') );
const distance = parseFloat ( prompt('Inserisci KM totali itinerario') );

// costo
const rate = 0.21;
let standardPrice = distance * rate;

// sconto
let off20 = standardPrice - (standardPrice * 0.20);
let off40 = standardPrice - (standardPrice * 0.40);
young = `UNDER18`;
senior = `OVER65`;

if (age < 18){
    total = off20;
    document.getElementById(`off`).innerHTML = young;
} else if (age >= 65){
    total = off40
    document.getElementById(`off`).innerHTML = senior;
} else {
    total = standardPrice;    
}
 
// print
document.getElementById(`price`).innerHTML = total.toFixed(2);
document.getElementById(`name`).innerHTML = name;
document.getElementById(`surname`).innerHTML = surname;
document.getElementById(`age`).innerHTML = age;
document.getElementById(`distance`).innerHTML = distance;

// button
function refreshPage(){
    window.location.reload();
}