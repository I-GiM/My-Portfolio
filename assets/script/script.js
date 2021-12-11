// Javascript for My Portfolio

const mobileMenu = document.getElementById('mobile-menu')
const navLinks = document.querySelectorAll('.navlinks')

const openMobileMenu = () => {
  mobileMenu.style.display = 'flex'
  mobileMenu.classList.add('links--animate')
  
  for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add('navlinks--animate')
  }
}

const closeMobileMenu = () => {
  document.querySelector('.close').style.opacity = '0'
  mobileMenu.classList.add('closelinks--animate')
  mobileMenu.classList.remove('links--animate')
  
  for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add('navlinks--disappear')
    navLinks[i].classList.remove('navlinks--animate')
  }

  setTimeout(() => {
    for(let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('navlinks--disappear')
    }
    mobileMenu.classList.remove('closelinks--animate')
    mobileMenu.removeAttribute('style')
    document.querySelector('.close').removeAttribute('style')
  }, 900);
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth < 1024) {
      mobileMenu.classList.remove('links--animate')
      mobileMenu.removeAttribute('style')
      
      for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('navlinks--animate')
      } 
    } else {
      return
    }
  })
});