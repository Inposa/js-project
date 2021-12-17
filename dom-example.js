const links = document.querySelector("a");

links.textContent = "Mozilla Developer Network";

links.href = "https://developer.mozilla.org";

let sect = document.querySelector("section");

let paragraphe = document.createElement("p");
paragraphe.textContent = "On espère que tu as aimé cette visite !";
sect.appendChild(paragraphe);

/*
paragraphe.style.color = 'white';
paragraphe.style.backgroundColor = 'black';
paragraphe.style.padding = '10px';
paragraphe.style.width = '250px';
paragraphe.style.textAlign = 'center';
*/

paragraphe.setAttribute("class", "highlight");

let text = document.createTextNode(
  "- The premier source for web development !"
);
let linkpara = document.querySelector("p");
linkpara.appendChild(text);
