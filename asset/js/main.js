var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal__container");
const modalClose = document.querySelector(".js-modal__close");

function showBuyTickets() {
  modal.classList.add("open");
}

function hideBuyTickets() {
  modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}

modalClose.addEventListener("click", hideBuyTickets);

modal.addEventListener("click", hideBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
