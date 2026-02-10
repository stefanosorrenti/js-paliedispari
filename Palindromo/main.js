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
-creo una funzione
-la funzione deve
    -reversare la parola
-confronto il la parola con la parola reverse
//SE la parola al contrario è uguale a quella del prompt
    -stampo il messaggio 'Frase palindroma'
ALTRIMENTI
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
const userWord = prompt('Inserisci una parola per verificare se è palindroma')//deve chiedere di inserire una parola



//FUNCTIONS
//creo una funzione

function toReverse(word) {
    let reverse = '' 
    for (i = word.length - 1; i >= 0; i--) {
        
        reverse = reverse + word[i] //reversare la parola e aggiungo piano piano la parte spezzetata
        

    }

    return reverse
}





    const reversedWord = toReverse(userWord) //salvo il valore
//confronto la parola con la parola reverse
    if(reversedWord === userWord) {  //SE la parola al contrario è uguale a quella del prompt
        console.log('Palindroma'); //stampo che è palindroma
        
    } else { //ALTRIMENTI 
        console.log('Non sei palindroma'); //stampa 'non è palindroma'
        
    }



    //STRUCTURE
    console.log(`La tua parola è questa: ${userWord}`);

    console.log(`La parola al contrario è questa: ${reversedWord}`);
    
    