const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

const header = document.querySelectorAll("span");

for (let i = 0; i < colors.length; i++) {
  header[i].style.color = colors[i];
}
