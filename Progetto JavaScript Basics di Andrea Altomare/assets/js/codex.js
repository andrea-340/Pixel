// Funzione per inizializzare gli stili della pagina e dei pulsanti
function initializeStyles() {
  // Imposta l'immagine di sfondo del corpo della pagina
  document.body.style.backgroundImage = "url('./assets/img/background.jpg')";

  // Configura lo stile dell'intestazione
  const h1 = document.getElementById('h1');
  h1.innerHTML = 'Pixel';
  h1.style.color = "black";
  h1.setAttribute("align", "center");
  h1.style.fontSize = "50px";

  // Applica lo stile ai pulsanti
  styleButton(document.getElementById("button"), '+');
  styleButton(document.getElementById("button1"), '-');
  styleButton(document.getElementById("reset"), 'reset');

  // Mostra le istruzioni del contatore all'utente
  alert("Queste sono le istruzioni del contatore. Ogni 10 click sul pulsante 'più', il pixel avanza di 70 passi; premendo il pulsante 'meno', si torna indietro, e premendo 'reset', si ritorna alla situazione iniziale");
}

// Funzione per stilizzare i pulsanti
function styleButton(button, text) {
  if (button) {
    button.innerHTML = text;
    button.style.color = "black";
    button.style.padding = "10px 20px";
    button.style.borderRadius = "30px";
    button.style.cursor = "pointer";
    button.setAttribute("align", "center");
  }
}

// Attende che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {
  initializeStyles(); 

  // Variabili per il contatore e la posizione del pixel
  let count = 0;
  let position = 0;

  // Seleziona l'elemento che mostra il contatore
  const counterDisplay = document.getElementById('counter');
  counterDisplay.textContent = count;

  // Seleziona i pulsanti
  const increment = document.getElementById('button');
  const decrement = document.getElementById('button1');
  const reset = document.getElementById('reset');

  // Aggiunge l'event listener per il pulsante di incremento
  if (increment) {
    increment.addEventListener('click', () => {
      count++;
      counterDisplay.textContent = count;
      if (count % 10 === 0) {
        position += 70;
        counterDisplay.style.transform = `translateX(${position}px)`;
      }
    });
  }

  // Aggiunge l'event listener per il pulsante di decremento
  if (decrement) {
    decrement.addEventListener('click', () => {
      if (count > 0) {
        count--;
        counterDisplay.textContent = count;
        if (count % 10 === 0 && count !== 0) {
          position -= 70;
          counterDisplay.style.transform = `translateX(${position}px)`;
        }
      }
    });
  }

  // Aggiunge l'event listener per il pulsante di reset
  if (reset) {
    reset.addEventListener('click', () => {
      count = 0;
      position = 0;
      counterDisplay.textContent = count;
      counterDisplay.style.transform = `translateX(${position}px)`;
    });
  }
});
