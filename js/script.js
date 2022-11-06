const btn = document.getElementById("btn");
const menuShow = document.getElementById("menuShow");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menuShow.classList.toggle("flex");
  menuShow.classList.toggle("hidden");
});
