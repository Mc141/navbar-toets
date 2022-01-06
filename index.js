const burgerMenu = document.querySelector(".burger-menu");
const list = document.querySelector(".list");

burgerMenu.addEventListener("click", e => {
    list.classList.toggle("list");
    list.classList.toggle("open-burger");
});