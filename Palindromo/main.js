//TRACCIA

/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 



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
Cosa deve fare la macchina?

-deve chiedere di inserire una parola
- devo spezzettare tutti i caratteri della parola
--spezzettare tutti i caratteri della parola la contrario
-creo una funzione
-la funzione deve
    -ciclare tutti i caratteri della frase
-creo una funziona
    -ciclare tutti i caratteri della frase al contrario

SE I CARETTERI DELLA PRIMA FUNZIONA SONO UGUALI A QUELLI DELLA SECONDA
    -ricompongo la frase
    -stampo il messaggio 'Frase palindroma'
ALTRIMENTI
    -ricompongo la frase
    -stampo il messaggio 'Frase non palindroma?





-spezzettare tutta la parola
-la deve scorrere tra tutte le lettera di quella parola
-creo un altra funzione
-deve scorrere tra tutte le lettere di quella parola al contrario
SE quando scorre le lettere nel primo forse sono uguali all'altro
-notifica l'utente se è palidroma
ALTRIMENTI
Notifica l'utente che non è palidroma.
*/

//DATA
const userWords = prompt('Inserisci una parola per verificare se è palindroma')//deve chiedere di inserire una parola

const splittedWords = userWords.split('') //spezzettare i caratteri di una frase/parola

const splittedWordsReversed = splittedWords.reverse()

console.log(splittedWords, splittedWordsReversed);

//FUNCTIONS

//creo una funzione


