const burgerCheckbox = document.getElementById("header__burger-checbox");
const sidebar = document.getElementById("sidebar");

burgerCheckbox.addEventListener("click", () => {
  
  if (!burgerCheckbox.checked) {
    sidebar.classList.add("sidebar--hide");
  } else {
    sidebar.classList.remove("sidebar--hide");
  }
})