Campo Minato
===
## Consegna
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba, fare visulaizzare tutte le bombe in griglia e congelare la griglia.

### Svolgimento

1. aggiungere un h2 su html che stampa il messaggio di fine gioco e fare il reset allo start
1. creare una classe bomb su css
1. creare una funzione random con dentro un ciclo fino a 16 e il random che va da 1 al numero di celle
1. usare la funzione random come bomb e se viene cliccato il box con la bomba diventa rosso
1. Creare la funzione game over con i messaggi di fine gioco
1. creare la funzione win con i messaggi di vittoria