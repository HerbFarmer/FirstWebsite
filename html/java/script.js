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

// event for button website
var redirectButton1 = document.getElementById("redirectButton1");

redirectButton1.addEventListener("click", function() {
  window.location.href = 'redirection/website.html';
});

// event for button webserver
var redirectButton2 = document.getElementById("redirectButton2");

redirectButton2.addEventListener("click", function() {
  window.location.href = 'redirection/tailwindcss.html';
});

// event for button knowledge
var redirectButton3 = document.getElementById("redirectButton3");

redirectButton3.addEventListener("click", function() {
  window.location.href = 'redirection/knowledge.html';
});