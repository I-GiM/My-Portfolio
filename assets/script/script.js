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
const form = document.getElementById('contactForm')
const name = document.getElementById('formName')
const email = document.getElementById('formEmail')
const message = document.getElementById('formMessage')
const submitButton = document.getElementById('submitButton')
const showMessageSuccess = document.getElementById('showMessageSuccess')
const showMessageFail = document.getElementById('showMessageFail')
const scrollToTopBtn = document.getElementById('scrollToTop')
const windowWidth = 991;

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
  if(window.screen.width < windowWidth) {
    mobileMenuOpen.style.display = 'block'
    mobileMenuClose.style.display = 'none'
    getMobileNav.style.display = 'none'
  }
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

// Scroll to Top functions
window.onscroll = () => scrollShow()
function scrollShow() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block"
  } else {
    scrollToTopBtn.style.display = "none"
  }
}

const scrollFunction = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

// Submit form
function submitSuccess() {
  form.reset()
  showMessageSuccess.innerText = 'Form submitted successfully'
  showMessageSuccess.style.display = 'block'
  setTimeout(() => {
    showMessageSuccess.style.display = 'none'
  }, 3000)
}
function submitError() {
  showMessageFail.innerText = 'Oops! Something went wrong.'
  showMessageFail.style.display = 'block'
  setTimeout(() => {
    showMessageFail.style.display = 'none'
  }, 3000)
}

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
      
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault()

  if(name.value == '' ) {
    showMessageFail.innerText = 'Name is required'
    showMessageFail.style.display = 'block'
    setTimeout(() => {
      showMessageFail.style.display = 'none'
    }, 3000)
  } else if(email.value == '') {
    showMessageFail.innerText = 'Email required'
    showMessageFail.style.display = 'block'
    setTimeout(() => {
      showMessageFail.style.display = 'none'
    }, 3000)
  } else if(message.value == '') {
    showMessageFail.innerText = 'Please enter your message'
    showMessageFail.style.display = 'block'
    setTimeout(() => {
      showMessageFail.style.display = 'none'
    }, 3000)
  } else {
    form.addEventListener('click', () => {
      const formData = new FormData(form)
      ajax(form.method, form.action, formData, submitSuccess, submitError);
    })
  }
})

// function sendForm() {
//   form.addEventListener('submit', () => {
//     const formData = new FormData(form)
//     ajax(form.method, form.action, formData, submitSuccess, submitError);
//   })
// }