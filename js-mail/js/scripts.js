/*
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/

const arrayMail = ['alessio@gmail.com', 'mauro@gmail.com', 'marco@gmail.com', 'ciao@gmail.com','maicol.j.95@gmail.com'];
console.log('email', arrayMail, arrayMail.length, typeof arrayMail)

let email = prompt('Inserisci la tua email');
let risultato = ""

for (let i = 0; i < arrayMail.length; i++) {
    if (arrayMail[i] == email){
        risultato = 1
    }
}

if (risultato != ""){
    alert('Accesso consentito');
    console.log('Puoi accedere')
}
else {
    alert('Accesso negato');
    console.log('Non puoi accedere')
}
