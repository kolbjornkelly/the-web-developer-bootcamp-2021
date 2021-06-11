const container = document.querySelector('div[id="container"]');
for (let i = 0; i < 100; i++) {
  let button = document.createElement("BUTTON");
  button.innerText = "Hey!";
  container.appendChild(button);
}
