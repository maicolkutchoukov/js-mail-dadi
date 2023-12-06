/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const pcNumber = Math.floor(Math.random() * 6 + 1);
console.log('Numero del pc', pcNumber, typeof pcNumber);
const userNumber = Math.floor(Math.random() * 6 + 1);
console.log('Numero dell\'utente', userNumber, typeof userNumber);



const myButton = document.querySelector('button');

myButton.addEventListener('click', function(){
    let dado1 = document.querySelector('.dado-pc');
    let dado2 = document.querySelector('.dado-utente')
    dado1.innerHTML = pcNumber;
    dado2.innerHTML = userNumber;
    let risultato = document.querySelector('p');
    if (pcNumber > userNumber){
        risultato.innerHTML = 'Ha vinto il PC';
    }
    else if (pcNumber < userNumber) {
        risultato.innerHTML = 'Hai Vinto tu';

    }
    else {
        risultato.innerHTML = 'Pareggio';

    }
})