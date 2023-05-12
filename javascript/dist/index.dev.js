"use strict";

var header = document.getElementById("header");
window.addEventListener("scroll", function (e) {
  var quantoJaFoiScrollada = window.pageYOffset;

  if (quantoJaFoiScrollada > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});