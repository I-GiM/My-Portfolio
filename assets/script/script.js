// Javascript for My Portfolio

const navbarMobile = document.getElementById('navbarMobile');

window.onscroll = () => scrollShow()
function scrollShow() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 100) {
    navbarMobile.style.display = "flex"
    if (screen.width >= 1024) {
      navbarMobile.style.display = 'none'
    }
  } else {
    navbarMobile.style.display = "none"
  }
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