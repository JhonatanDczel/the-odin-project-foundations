const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = () => {
  let value = input.value;
  input.value = "";
  let li = document.createElement('li');
  let span = document.createElement('span');
  let btn = document.createElement('button');

  li.appendChild(span);
  li.appendChild(btn);

  span.textContent = value;
  btn.textContent = "Delete";

  ul.appendChild(li);

  btn.onclick = () => { li.remove(); };

  input.focus();
};

