const container = document.querySelector('#container');
const all = document.querySelector('*');
all.style.padding = "0";

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'El REAL text-content';

const p = document.createElement('p');
p.textContent = "Hi, I'm red";
p.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = 'Hi!, I\'m blue';
h3.style.color = 'blue';


const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const h1C = document.createElement('h1');
h1C.textContent = "I'm in a div";

const pC = document.createElement('p');
pC.textContent = "ME TOO";

div.appendChild(h1C);
div.appendChild(pC);

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);


function saludar() {
  alert("Usar funciones como parametro para los eventos es una buena idea :)");
}

const btn = document.querySelector("#btn");
//btn.onclick = () => alert("Hellooo :3 from JS <3");

//btn.addEventListener('click', () => { alert("Helloooo on eventListener :3"); });

btn.addEventListener('click', function(e) { e.target.style.background = 'blue'; });

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener('click', (e) => { alert(e.target.id); });
});
