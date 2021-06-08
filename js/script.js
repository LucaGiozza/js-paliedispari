
// Chiedere all’utente di inserire una parola. 
// Creare una funzione per capire se 
// la parola inserita è palindroma


//  var parola = prompt('inserisci una parola');

//  var parolaInversa = invertiParola(parola);

//  if(parola == parolaInversa){
//      console.log('la parola è palindroma');
//    } else {
//      console.log('la parola non è palindroma');
//    }
  
//   function invertiParola(inversione){
//     var strInversa = inversione.split('').reverse().join('');  
//     return strInversa;
//   }


// primo esercizio senza il reverse

var parola = prompt('inserisci una parola');
parola = parola.toLocaleLowerCase();

var lunghezzaStringa = parola.length;
 console.log(lunghezzaStringa);

// console.log(parola[lunghezzaStringa - 1]);
var inversa = '';

for(var i = lunghezzaStringa -1; i >= 0; i--){
    console.log(parola[i]);
    inversa += parola[i];
}
console.log(inversa);


var parolaInversa = inverti(parola);
console.log(parolaInversa);

if(parola == parolaInversa){
    console.log('palindroma')

}else {
    console.log('non è palindroma')
}

function inverti(stringaTesto){
    var inversa = '';
    var lunghezzaStringa = stringaTesto.length;

    for(var i = lunghezzaStringa -1; i >= 0; i--){
        console.log(stringaTesto[i]);
        inversa += stringaTesto[i];
    } 
    return inversa;
}


//   L’utente sceglie pari
//  o dispari e inserisce un numero da 1 a 5.
//   Generiamo un numero random (sempre da 1 a 5)
//    per il computer (usando una funzione). Sommiamo 
//    i due numeri. Stabiliamo se la somma dei due numeri
//    è pari o dispari
//  (usando una funzione) Dichiariamo chi ha vinto.


// var scelta = prompt('scegli tra pari o dispari');
// var sceltaNumero = parseInt(prompt('inserisci un numero da 1 a 5'));


// var numeroPc = getRndInteger(1, 5);

// function getRndInteger(min, max){
//     return Math.floor(Math.random() * (max - min + 1 )) + min;
// }
// console.log(scelta);
// console.log(sceltaNumero);
// console.log(numeroPc);


//  var x = myFunction(sceltaNumero, numeroPc );
 

//  function myFunction(a, b) {
//     var risultato = a + b
//   return risultato;
//  }
//  console.log(x);

// if(x % 2 == 0   ){
//     console.log('pari')
//     if(scelta == 'pari'){
//         console.log('hai vinto')
//     }else if(scelta =! 'pari'){
//         console.log('hai perso')
//     }
// }else if( x % 2 != 0){
//     console.log('dispari')
//     if(scelta == 'dispari'){
//         console.log('hai vinto')
//     }else if(scelta =! 'dispari'){
//         console.log('hai perso')
//     }
    

// }





var pariDispari = prompt ('pari o dispari');
var numero = parseInt( prompt (' scegli un numero da 1 a 5'));


var generatorePc = numeroR(1,5);

var somma = sommaNumeri(numero, generatorePc);


function numeroR(min,max){
    return Math.floor(Math.random() * (max - min +1) ) + min;
}

function sommaNumeri(num1, num2){
    return somma = num1 + num2;
}

// console.log(sommaNumeri(numero, generatorePc));


// funzione per il pari o dispari

function sePari(sum){
    if(somma % 2 == 0){
        return 'pari';
    }else{
        return 'dispari';
    }
}
 


var risultato = sePari(somma);
console.log(risultato);

// document.getElementById('pari-dispari').innerHTML = somma ;

if(risultato = pariDispari ){
    document.getElementById('pari-dispari').innerHTML = 'l utente ha vinto';
}

if(risultato != pariDispari ){
    document.getElementById('pari-dispari').innerHTML = 'l utente ha perso';
}