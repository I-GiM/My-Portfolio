// Javascript for My Portfolio

let desktopNav = document.getElementById('headerLinks')
let getMobileNav = document.getElementById('mobileNav')
const clonedNav = desktopNav.cloneNode(true)
const mobileMenuOpen = document.getElementById('mobileMenuOpen')
const mobileMenuClose = document.getElementById('mobileMenuClose')

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