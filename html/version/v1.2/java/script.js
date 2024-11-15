var navbarText = document.getElementById("navbar-text");
var navbar = document.getElementById("navbar");

navbarText.addEventListener("click", function() {
  if (navbar.style.opacity === "0") {
    navbar.style.opacity = "1";
  } else {
    navbar.style.opacity = "0";
  }
});

navbar.addEventListener("mouseleave", function() {
  navbar.style.opacity = "0";
});
