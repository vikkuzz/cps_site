var buttonOpenMenu = document.querySelector(".btn-round--menu");
var modalLeft = document.querySelector(".sidebar");
var buttonCloseMenu = document.querySelector(".btn-round--back");
var menu = document.querySelector(".menu__nav");
var heightBody = document.querySelector(".page__block");
var sidebarBody = document.querySelector(".sidebar__body");

buttonOpenMenu.addEventListener("click", function () {
  heightBody.classList.add("body-height-hidden");
  modalLeft.classList.remove("sidebar-hide");
  modalLeft.classList.add("sidebar-open");
});

buttonCloseMenu.onclick = function () {
  heightBody.classList.remove("body-height-hidden");
  modalLeft.classList.add("sidebar-hide");
  modalLeft.classList.remove("sidebar-open");
};

modalLeft.addEventListener("click", function (e) {
  if (!sidebarBody.contains(e.target) && !buttonCloseMenu.contains(e.target)) {
    heightBody.classList.remove("body-height-hidden");
    modalLeft.classList.add("sidebar-hide");
    modalLeft.classList.remove("sidebar-open");
    console.log("modal-left");
  }
});
