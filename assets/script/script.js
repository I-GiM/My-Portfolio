// Javascript for My Portfolio

let desktopNav = document.getElementById('headerLinks')
let getMobileNav = document.getElementById('mobileNav')
const clonedNav = desktopNav.cloneNode(true)
const mobileMenuOpen = document.getElementById('mobileMenuOpen')
const mobileMenuClose = document.getElementById('mobileMenuClose')
const aboutLink = document.getElementById('aboutLink')
const worksLink = document.getElementById('worksLink')
const contactLink = document.getElementById('contactLink')

function copiedNav() {
  return getMobileNav.appendChild(clonedNav)
}
copiedNav()

function openMenuMobile() {
  mobileMenuOpen.style.display = 'none'
  mobileMenuClose.style.display = 'block'
  getMobileNav.style.display = 'block'
}

function closeMenuMobile() {
  mobileMenuOpen.style.display = 'block'
  mobileMenuClose.style.display = 'none'
  getMobileNav.style.display = 'none'
}

aboutLink.addEventListener('click', () => {
  aboutLink.classList.add('active-link')
  worksLink.classList.remove('active-link')
  contactLink.classList.remove('active-link')
})
worksLink.addEventListener('click', () => {
  worksLink.classList.add('active-link')
  aboutLink.classList.remove('active-link')
  contactLink.classList.remove('active-link')
})
contactLink.addEventListener('click', () => {
  contactLink.classList.add('active-link')
  aboutLink.classList.remove('active-link')
  worksLink.classList.remove('active-link')
})