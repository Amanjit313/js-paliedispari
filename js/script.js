/* 

1. Palidroma
- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma

2. Pari e Dispari
- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto

*/

// 1. Palidroma
var parolapali = prompt("Inserisci una parola palindroma!");
var parolapaliinvert = parolaInvertita(parolapali);

if(parolapali == parolapaliinvert){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}

function parolaInvertita(str){
  var parolapaliinvert = '';

  var i = str.length - 1;

  while (i >= 0) {
    parolapaliinvert += str[i];
    i--;
  }

  return parolapaliinvert;
}

// 2. Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const paridisparitext = prompt("Scegli se essere Pari o Dispari");
/* const parole = ["Pari", "Dispari", "pari", "dispari"];
let parolev = false;

for (let i = 0; i < parole.length; i++)

  if (parole[i] === paridisparitext){
    parolev = true;
    alert("Non hai inserito Pari o Dispari, riprovare");
    paridisparitext = prompt("Scegli se essere Pari o Dispari");
} */

document.getElementById("pariedispari").innerHTML = "Hai scelto il" + " " + paridisparitext;
console.log("Hai scelto il" + " " + paridisparitext);

const numeroutente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Hai scelto il numero" + " " + numeroutente);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let numerocomputer = randomNumber(1,5);

function randomNumber(min, max){
  return  Math.floor(Math.random() * (max - min +1) + min );
}
console.log("Il computer ha scelto il numero" + " " + numerocomputer);

// Sommiamo i due numeri
const somma = numeroutente + numerocomputer;
console.log("La somma dei numeri è" + " " + somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
if(isPari(somma)){
  console.log(`${somma} è pari`)
}else{
  console.log(`${somma} è dispari`)
}

function isPari(somma){
  if(somma % 2) return false;
  return true;
}

// Dichiariamo chi ha vinto
if (!(somma % 2)){
  document.getElementById("pariedisparirisultato").innerHTML = "Ha vinto il pari!";
} else {
  document.getElementById("pariedisparirisultato").innerHTML = "Ha vinto il dispari!";
}