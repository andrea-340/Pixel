document.body.style.backgroundImage = "url('./img/background.jpg')";
alert("Queste sono le istruzioni del contatore. Ogni 10 click sul pulsante 'più', il pixel avanza di 70 passi; premendo il pulsante 'meno', si torna indietro, e premendo 'reset', si ritorna alla situazione iniziale");

const h1 = document.getElementById('h1');
h1.innerHTML = 'Pixel';
h1.style.color = "black";
h1.setAttribute("align", "center");
h1.style.fontSize = "50px";

const button = document.getElementById("button");
button.innerHTML = '+';
button.style.color = "black";
button.style.padding = "10px 20px";
button.style.borderRadius = "30px";
button.style.cursor = "pointer";
button.setAttribute("align", "center");

const button1 = document.getElementById("button1");
button1.innerHTML = '-';
button1.style.color = "black";
button1.style.padding = "10px 20px";
button1.style.borderRadius = "30px";
button1.style.cursor = "pointer";
button1.setAttribute("align", "center");

const reset = document.getElementById("reset");
reset.innerHTML = 'reset';
reset.style.color = "black";
reset.style.padding = "10px 20px";
reset.style.borderRadius = "30px";
reset.style.cursor = "pointer";
reset.setAttribute("align", "center");

document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    let position = 0;
    const counterDisplay = document.getElementById('counter');
    counterDisplay.textContent = count;
    const increment = document.getElementById('button');
    const decrement = document.getElementById('button1');
    const reset = document.getElementById('reset');

increment.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
    if (count % 10 === 0) {
    position += 70;
    counterDisplay.style.transform = `translateX(${position}px)`;
 }
});

decrement.addEventListener('click', () => {
    if (count > 0) {
    count--;
    counterDisplay.textContent = count;
    if (count % 10 === 0 && count !== 0) {
    position -= 70; // Decrementa la posizione di 10 pixel se si torna indietro
    counterDisplay.style.transform = `translateX(${position}px)`;
  }
 }
});
reset.addEventListener('click',()=>{
    count = 0;
    position = 0;
    counterDisplay.textContent = count;
    counterDisplay.style.transform = `translateX(${position}px)`;
  })
});
