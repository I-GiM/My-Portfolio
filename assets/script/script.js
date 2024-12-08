// Javascript for My Portfolio

const navbar = document.getElementById("navbar");
const linksWrap = document.getElementById("links-wrap");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const navLinks = document.querySelectorAll('.navlinks');

document.getElementById("year").innerHTML = new Date().getFullYear()

const openMobileMenu = () => {
  navbar.classList.add("navbar-open");
  linksWrap.classList.add("links-open");
  hamburger.classList.add("hamburger-open");
  close.classList.add("close-open");

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add('navlinks-show');
  };
};

const closeMobileMenu = () => {
  linksWrap.classList.remove("links-open");
  hamburger.classList.remove("hamburger-open");
  close.classList.remove("close-open");

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('navlinks-show');
  };

  setTimeout(() => {
    navbar.classList.remove("navbar-open");
  }, 3000);
};

const copyEmail = () => {
  // Copy the text inside the text field
  navigator.clipboard.writeText("ikennaoyiih@gmail.com");

  // Alert the copied text
  alert("Email copied: ikennaoyiih@gmail.com");
}