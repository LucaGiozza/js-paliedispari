
// Chiedere all’utente di inserire una parola. 
// Creare una funzione per capire se 
// la parola inserita è palindroma


 var parola = prompt('inserisci una parola');

 var parolaInversa = invertiParola(parola);

 if(parola == parolaInversa){
     console.log('la parola è palindroma');
   } else {
     console.log('la parola non è palindroma');
   }
  
  function invertiParola(inversione){
    var strInversa = inversione.split('').reverse().join('');  
    return strInversa;
  }


//   L’utente sceglie pari
//  o dispari e inserisce un numero da 1 a 5.
//   Generiamo un numero random (sempre da 1 a 5)
//    per il computer (usando una funzione). Sommiamo 
//    i due numeri. Stabiliamo se la somma dei due numeri
//    è pari o dispari
//  (usando una funzione) Dichiariamo chi ha vinto.


var scelta = prompt('scegli tra pari o dispari');
var sceltaNumero = parseInt(prompt('inserisci un numero da 1 a 5'));


var numeroPc = getRndInteger(1, 5);

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}
console.log(scelta);
console.log(sceltaNumero);
console.log(numeroPc);


 var x = myFunction(sceltaNumero, numeroPc );
 

 function myFunction(a, b) {
    var risultato = a + b
  return risultato;
 }
 console.log(x);

if(x % 2 == 0   ){
    console.log('pari')
    if(scelta == 'pari'){
        console.log('hai vinto')
    }else if(scelta =! 'pari'){
        console.log('hai perso')
    }
}else if( x % 2 != 0){
    console.log('dispari')
    if(scelta == 'dispari'){
        console.log('hai vinto')
    }else if(scelta =! 'dispari'){
        console.log('hai perso')
    }
    

}



