const link = document.querySelector('a');

link.textContent = "Mozilla DEVELOPER Network";
link.href = "https://developer.mozilla.org";
link.target = "_blank";

const sect = document.querySelector('section');

const para = document.createElement('p');
para.textContent = 'We hope you enyoyed the ride.';
sect.appendChild(para);


const text = document.createTextNode(
  " — the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);

linkPara.remove();

linkPara.parentNode.removeChild(linkPara);
