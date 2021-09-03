function hey() {
  console.log("hello");
}

function bye() {
  console.log("goodbye");
}

const helloBtn = document.querySelector("#hello");
const byeBtn = document.querySelector("#goodbye");

helloBtn.addEventListener("click", hey);
byeBtn.addEventListener("click", bye);
