//TRACCIA

/*  

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.





Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?

*/



//HUMAN CODE

/*
Cosa deve fare la macchina?*

-chiedo all'utente di scegliere pari o dispari
-chiedo all'utente di scegliere un numero da 1 a 5
-genero un numero random da 1 a 5 per il computer
-sommo i numeri
-verifico se la somma dei numeri è pari o dispari
    SE il numero pari E' l'utente ha selezionato pari
        -stampo vince l'utente
    ALTRIMENTI SE la somma dei numeri E' dispari è l'utente ha scelto dispari
        -stampo vince l'utente
    
    ALTRIMENTI 
        -stampo che vince la macchina


*/



//DATA

const userChoice = prompt('Scrivi se vuoi giocare pari o dispari').toUpperCase(); //chiedo all'utente di scegliere pari o dispari

const userNumber = parseInt(prompt('Scrivi un numero da 1 a 5')); //chiedo all'utente di scegliere un numero da 1 a 5 */

function pcNumber(min, max) {  //genero un numero random da 1 a 5 per il computer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const computerNumber = pcNumber(1, 5) //richiamo la funzione in una variabile


const finalResult = userNumber + computerNumber; //sommo i numeri


//STRUCTURE
console.log(`Il tuo numero è: ${userNumber} Hai scelto: ${userChoice}`);
console.log(`Il numero del computer è: ${computerNumber}`);
console.log(`Il totale è: ${finalResult}`);




function getOddOrEven(sumOfnumber, userWord) {
    //verifico se la somma dei numeri è pari o dispari
    let winner;
    //SE il numero pari E' l'utente ha selezionato pari
    if (sumOfnumber % 2 === 0 && userWord === 'PARI') {
        winner = 'Ha vinto il giocatore'
        
        //ALTRIMENTI SE la somma dei numeri E' dispari è l'utente ha scelto dispari
    } else if (sumOfnumber % 2 === 1 && userWord === 'DISPARI') {
        winner = 'Ha vinto il giocatore'


        //ALTRIMENTI     
    } else {
        winner = 'Ha vinto il computer'
    }

    return winner;

}

console.log(getOddOrEven(finalResult, userChoice));

