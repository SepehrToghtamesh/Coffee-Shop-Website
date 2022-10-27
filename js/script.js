let $ = document;

let navbar = $.querySelector(".navbar");
$.querySelector("#menu-btn").addEventListener("click", function () {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
});

let searchForm = $.querySelector(".search-form");
$.querySelector("#search-btn").addEventListener("click", function () {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
});

let cartItem = $.querySelector(".cart-items-container");
$.querySelector("#cart-btn").addEventListener("click", function () {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};
