//Funzione richiamata al click del bottone submit dal form nel documento HTML
function validateForm() {
    //Recupera il form e lo inserisce nella variabile formElem come elemento HTML
    const formElem = document.forms["form"];

    //Recupera i campi compilati dall'utente nel form
    const nome = formElem["nome"].value;
    const password = formElem["password"].value;
    const eta = formElem["eta"].value;

    //Vengono assegnati dei valori minimi da rispettare
    const etaMinima = 18;
    const lunghezzaMinima = 8;

    //Vengono richiamate le funzioni che simulano il Constrain Validation
    required(nome);
    minlength(password, lunghezzaMinima);
    min(eta, etaMinima);
}

/*****************/
//Funzioni

//required controlla se l'utente ha inserito qualcosa nel campo di testo. Funziona come il Constraint Validation implementato in HTML5
function required(stringa) {
    stringa === "" ? alert(`Inserire il nome`) : console.log(`Nome:` , stringa);
}

//minlength controlla se la lunghezza di un valore inserito in un campo è minore di x caratteri. Funziona come il Constraint Validation implementato in HTML5
function minlength(stringa, x) {
    stringa.length < x ? alert(`Inserisci una password di almeno ${x} caratteri`) : console.log("Ottima password");
}

//min controlla se il numero inserito è minore di nMin. Funziona come il Constraint Validation implementato in HTML5
function min(n, nMin) {
    n < nMin ? alert("Devi essere maggiorenne") : console.log("Età: ", n);
}
