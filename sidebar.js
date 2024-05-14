const burgerCheckbox = document.getElementById("sidebar__burger-checbox");
const sidebar = document.getElementById("sidebar");

burgerCheckbox.addEventListener("click", () => {
  
  if (!burgerCheckbox.checked) {
    sidebar.classList.add("sidebar--hide");
  } else {
    sidebar.classList.remove("sidebar--hide");
  }
})