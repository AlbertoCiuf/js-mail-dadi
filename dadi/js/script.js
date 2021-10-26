/*
Estrarre un numero random da 1 a 6 per l'utente e un altro per il pc
confrontarli
il più alto vince
*/ 

//dichiarazione variabili
const numPC = Math.floor(Math.random() * 6) + 1;
const numPlayer = Math.floor(Math.random() * 6) + 1;
console.log(numPC);
console.log(numPlayer);
let risultato = '';

//confronto variabili
if (numPC > numPlayer) {
  risultato = "Mi dispiace, hai perso!"
} else if (numPlayer > numPC) {
  risultato = "Complimenti, hai vinto!"
} else risultato = "La partita finisce in parità.";

const output = document.getElementById('output');
output.innerHTML = 
`
  Il tuo numero è ${numPlayer}, mentre quello del computer è ${numPC}. <br>
  ${risultato}
`;