let $ = document;

let navbar = $.querySelector(".navbar");
$.querySelector("#menu-btn").addEventListener("click", function () {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  caetItem.classList.remove("active");
});

let searchForm = $.querySelector(".search-form");
$.querySelector("#search-btn").addEventListener("click", function () {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  caetItem.classList.remove("active");
});

let caetItem = $.querySelector(".cart-items-container");
$.querySelector("#cart-btn").addEventListener("click", function () {
  caetItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  caetItem.classList.remove("active");
};
