const button = document.querySelector('button');

document.body.addEventListener('click', () => { alert('From doby'); });
button.addEventListener('click', (e) => { alert('From button'); e.stopPropagation(); });

