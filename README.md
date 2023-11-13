# Validazione del form

La validazione dei dati inseriti in un form è un processo che ci assicura che l'input dell'utente sia pulito, corretto e utilizzabile.

## Validazione del form tramite Java Script

Esempio di codice HTML con validazione tramite JS:
```html
<form name="form" onsubmit="return validateForm()">
        <h3>1. L'input del nome non deve essere vuoto</h3>
        <label for="name" >Nome
            <input type="text" id="name" name="nome">
        </label>
        <h3>2. La password deve avere almeno 8 caratteri</h3>
        <label for="password"> Password
            <input type="password" id="password" name="password">
        </label>
        <h3>3. L'età deve essere un numero maggiore di 18</h3>
        <label for="eta"> Eta
            <input type="number" id="eta" name="eta">
        </label>
        <button id="submit">Submit</button>
</form>
```

- In questo codice html al click del bottone _Submit_ viene chiamata la funzione _validateForm()_
- Ogni elemento _input_ ha un attributo **name** per poter essere individuato nel documento JavaScript come attributo dell'elemento _form_:
    - L'input di tipo _text_ ha come attributo **name** = "name";
    - L'input di tipo _password_ ha come attributo **name** = "password"
    - L'input di tipo _number_ ha come attributo **name** = "age"

### La funzione *ValidateForm()*

Nel documento Javascript abbiamo la funzione _validateForm()_ con il seguente codice:

```JavaScript
function validateForm() {

    const formElem = document.forms["form"];

    const nome = formElem["nome"].value;
    const password = formElem["password"].value;
    const eta = formElem["eta"].value;

    const etaMinima = 18;
    const lunghezzaMinima = 8;

    required(nome);
    minlength(password, lunghezzaMinima);
    min(eta, etaMinima);
}
```

Come prima cosa vediamo che viene recuperato l'elemento _form_ dal documento HTML e lo mettiamo all'interno della variabile **formElem**:

```JavaScript
const formElem = document.forms["form"];
```

La variabile **formElem** contiene al suo interno tutti i campi che abbiamo inserito nel documento HTML e li possiamo individuare tramite il loro attributo **name**:

```JavaScript
    const nome = formElem["nome"].value;
    const password = formElem["password"].value;
    const eta = formElem["eta"].value;
```

In questo caso, tramite la bracket notation, abbiamo individuato gli elementi input che abbiamo creato nel documento HTML e abbiamo inizializzato delle variabili con il valore contenuto nell'elemento.
Ora possiamo effettuare dei controlli su queste variabili.

In questo caso avviseremo l'utente se l'input del nome è vuoto, se la lunghezza della password è di almeno 8 caratteri e se l'età inserita è maggiore o uguale a 18.
Per effettuare questo ci serviremo delle seguenti variabili:

```JavaScript
    const etaMinima = 18;
    const lunghezzaMinima = 8;
```

Infine invochiamo le funzioni che ci permettono la validazione dell'input:

```JavaScript
    required(nome);
    minlength(password, lunghezzaMinima);
    min(eta, etaMinima);
```

### Validazione dell'input

##### required

- Controlliamo se è stato compilato il campo del nome tramite la funzione `required(nome)`. Questa funzione prende come parametro il valore inserito nell'elemento HTML _input_ con **name** = "nome":

```JavaScript
function required(stringa) {
    stringa === "" ? alert(`Inserire il nome!`) : console.log(`Nome:` , stringa);
}
```
La funzione controlla se la stringa è vuota, nel caso sia così viene visualizzato il messaggio "Inserire il nome" tramite un `alert()`, altrimenti stampa il nome in console.

##### minlength

- Controlliamo se è stato compilato il campo della password con almeno 8 caratteri tramite la funzione `minlength(password, lunghezzaMinima)`. Questa funzione prende come parametro il valore inserito nell'elemento HTML _input_ con **name** = "password" e la variabile lunghezzaMinima.

```JavaScript
function minlength(stringa, x) {
    stringa.length < x ? alert(`Inserisci una password di almeno ${x} caratteri`) : console.log("Ottima password");
}
```

La funzione `minlength(stringa, x)` controlla la lunghezza di una stringa, se la lunghezza è minore di x allora viene visualizzato il messaggio "Inserisci una password di almeno x caratteri", nel caso invece la password inserita rispetti la condizione allora viene stampato in console il messaggio: "Ottima password".

##### min

- Controlliamo se l'età minima inserita è maggiore o uguale di 18 tramite la funzione `min(eta, etaMinima)`. Questa funzione prende come parametro il valore inserito nell'elemento HTML _input_ con **name** = "eta" e la variabile etaMinima.

```JavaScript
function min(n, nMin) {
    n < nMin ? alert("Devi essere maggiorenne") : console.log("Età: ", n);
}
```
La funzione `min(n, nMin)` controlla il numero n, se questo è minore di nMin allora sarà visualizzato il messaggio : "Deevi essere maggiorenne", nel caso invece il numero n sia maggiore o uguale a 18 stampa in console l'età inserita.

### Conclusioni

Questo codice vuole mostrare come la validazione di un form HTML può essere effettuata tramite JavaScript.

Molto spesso l'obiettivo della validazione è quello di garantire un corretto input dell'utente.

La validazione può essere implementata in diversi modi.

Esiste la validazione **lato server**, che viene effettuata dopo che l'input è stato inviato al server, oppure quella **lato client** che viene effettuata prima.

Questo mio lavoro vuole rappresentare ciò che veniva fatto prima che nell'HTML5 venissero introdotti degli attributi per l'input.

Le funzioni sono state chiamate con il nome del metodo HTML5 al quale si riferiscono.

| Funzione Implementata  |  Metodo HTML5 |
|------------------------|---------------|
| `required(stringa)`    |     `required`|
| `minlength(stringa, x)`|`minlength = 8`|
|`min(n, nMin)`          |     `min = 18`|