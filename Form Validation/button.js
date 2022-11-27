const revealbtn = document.getElementById("reveal");
const container = document.querySelector(".container");
const back = document.getElementById("back");
const pagestart = localStorage.getItem("page");
console.log(pagestart);

if (pagestart === "reveal") {
  container.style.display = "flex";
  revealbtn.style.display = "none";
}

revealbtn.addEventListener("click", (e) => {
  container.style.display = "flex";
  revealbtn.style.display = "none";
  localStorage.setItem("page", "reveal");
});

back.addEventListener("click", (e) => {
  container.style.display = "none";
  revealbtn.style.display = "block";
  localStorage.setItem("page", "close");
});

//Check local storage
