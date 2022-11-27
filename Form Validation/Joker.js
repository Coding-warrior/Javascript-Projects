let image = document.querySelector(".image-container");
let joker = document.querySelector("joker-laugh");
let jokerimg = document.getElementById("joker");
let loaderimg = document.getElementById("loader");
let h1 = document.querySelector("h1");

// loader.style.display = "none";
jokerimg.style.display = "none";

function jokerji() {
  jokerimg.style.display = "block";
  h1.textContent = "Hahhahaha";
  document.body.style.backgroundColor = "#222222";
  h1.style.color = "White";
  setTimeout(() => {
    jokerimg.style.display = "none";
    loaderji();
  }, 3000);
}

function loaderji() {
  loaderimg.style.display = "block";
  h1.textContent = "You are in for a Ride";
  document.body.style.backgroundColor = "#e3e3e3";
  h1.style.color = "rgb(218, 36, 36)";
  setTimeout(() => {
    loaderimg.style.display = "none";
    jokerji();
  }, 3000);
}

setTimeout(() => {
  jokerji();
}, 3000);
