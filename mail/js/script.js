/*
caricare elenco mail
chiedere mail in input all'utente
controllare con ciclo se la mail dell'utente è presente nell'elenco
se presente output okay
se non presente output negativo
*/

//versione con ciclo for

//variabili
const mailList = ["email@dominio.com", "email2@gmail.com", "email3@libero.it", "alberton.ciufici@gmail.com", "pippo@pluto.xyz"];
const userMail = prompt("Inserisci il tuo indirizzo email");
let result = false;
let risposta = 'La tua mail non è presente nell\'elenco';

//cerco mail nell'elenco se il prompt non è vuoto
if (userMail !== '') {
  for (let i=0; i < mailList.length; i++) {
    if (mailList[i] === userMail) result = true;
  };
  
  if (result === true) risposta = 'La tua mail è presente nell\'elenco';
  
  //output
  const output = document.getElementById('output');
  output.innerHTML = risposta;
} else alert('Inserisci un valore valido');


//versione con array.includes(variabile)

// if (userMail !== '') {
//   if (mailList.includes(userMail)) {
//     risposta =  'La tua mail è presente nell\'elenco';
//   }
  
//   //output
//   const output = document.getElementById('output');
//   output.innerHTML = risposta;
// } else alert("Inserisci un valore valido");
