const input = document.getElementById('metreInput');
const output = document.getElementById('output');

output.style.visibility = 'hidden';

input.addEventListener('input', (e) => {
  let metre = e.target.value;

  output.style.visibility = 'visible';

  let centi = document.getElementById('centiOutput');
  centi.innerHTML = metre * 100;

  let kilo = document.getElementById('kiloOutput');
  kilo.innerHTML = metre/1000;

  let inch = document.getElementById('inchOutput');
  inch.innerHTML = metre * 39.37;

  e.preventDefault();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
   navigator.serviceWorker.register('../sw.js').then( () => {
    console.log('Service Worker Registered')
   })
 })
}