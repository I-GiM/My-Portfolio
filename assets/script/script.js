// Javascript for My Portfolio

const navbarMobile = document.getElementById('navbarMobile');

window.onscroll = () => scrollShow()
function scrollShow() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    navbarMobile.style.display = "flex"
    if (screen.width >= 1024) {
      navbarMobile.style.display = 'none'
    }
  } else {
    navbarMobile.style.display = "none"
  }
}