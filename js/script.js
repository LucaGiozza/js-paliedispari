
// Chiedere all’utente di inserire una parola. 
// Creare una funzione per capire se 
// la parola inserita è palindroma


// boh?




//  L’utente sceglie pari
//  o dispari e inserisce un numero da 1 a 5.
//   Generiamo un numero random (sempre da 1 a 5)
//    per il computer (usando una funzione). Sommiamo 
//    i due numeri. Stabiliamo se la somma dei due numeri
//    è pari o dispari
//  (usando una funzione) Dichiariamo chi ha vinto.


var scelta = prompt('scegli tra pari o dispari');
var sceltaNumero = prompt('inserisci un numero da 1 a 5');


var numeroPc = getRndInteger(1, 5);

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}
console.log(scelta);
console.log(sceltaNumero);
console.log(numeroPc);


 var x = myFunction(sceltaNumero, numeroPc );


 function myFunction(a, b) {
   return a + b;
 }
 console.log(x)

// var somma = sceltaNumero + numeroPc ;
// console.log(somma);