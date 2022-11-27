let buttons = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");

buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    let value = e.target.dataset.num;
    screen.value += value;
  });
});

equal.addEventListener("click", (e) => {
  if (screen.value === "") {
    screen.value == " ";
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
});

clear.addEventListener("click", (e) => {
  screen.value = null;
});
