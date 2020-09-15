// Javascript for My Portfolio

let desktopNav = document.getElementById('headerLinks')
let getMobileNav = document.getElementById('mobileNav')
const clonedNav = desktopNav.cloneNode(true)
const mobileMenuOpen = document.getElementById('mobileMenuOpen')
const mobileMenuClose = document.getElementById('mobileMenuClose')
const aboutLink = document.getElementById('aboutLink')
const worksLink = document.getElementById('worksLink')
const contactLink = document.getElementById('contactLink')
const designCentricBlock = document.getElementById('designCentric')
const frontendBlock = document.getElementById('frontend')
const developerBlock = document.getElementById('developer')
const designCentricText = document.getElementById('designCentricText')
const frontendText = document.getElementById('frontendText')
const developerText = document.getElementById('developerText')

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

// Active Link switch
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

// About section switch blocks
function hideInactiveBlockText() {
  frontendText.style.display = 'none'
  developerText.style.display = 'none'
}
hideInactiveBlockText()
designCentricBlock.addEventListener('click', () => {
  designCentricBlock.classList.add('active-section')
  frontendBlock.classList.remove('active-section')
  developerBlock.classList.remove('active-section')
  designCentricText.style.display = 'block'
  frontendText.style.display = 'none'
  developerText.style.display = 'none'
})
frontendBlock.addEventListener('click', () => {
  designCentricBlock.classList.remove('active-section')
  frontendBlock.classList.add('active-section')
  developerBlock.classList.remove('active-section')
  designCentricText.style.display = 'none'
  frontendText.style.display = 'block'
  developerText.style.display = 'none'
})
developerBlock.addEventListener('click', () => {
  designCentricBlock.classList.remove('active-section')
  frontendBlock.classList.remove('active-section')
  developerBlock.classList.add('active-section')
  designCentricText.style.display = 'none'
  frontendText.style.display = 'none'
  developerText.style.display = 'block'
})