let input = document.querySelector("input");
let ul = document.querySelector("ul");

let button = document.querySelector("button");
button.addEventListener("click", () => {
  let inputValue = input.value.trim();
  console.log(inputValue);
  input.value = "";
  if (inputValue == "" || inputValue == null) {
    return;
  }

  let li = document.createElement("li");
  let span = document.createElement("span");
  let button2 = document.createElement("button");

  li.appendChild(span);
  li.appendChild(button2);

  span.textContent = inputValue;
  button2.textContent = "Supprimer";

  ul.appendChild(li);

  button2.addEventListener("click", () => {
    li.remove();
  });
});
