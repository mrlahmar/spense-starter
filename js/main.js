/* Description: Main JavaScript File */

/**************************
** Navigation on Mobile **
*************************/

const toggle = document.querySelector('.toggle')
const nav = document.querySelector('nav>ul')

// show or hide navigation when toggle is clicked
toggle.addEventListener('click', () => {
    nav.classList.toggle('show-nav')
    toggle.classList.toggle('clicked')
})

/*********************
** Form Validation **
********************/
const form = document.querySelector('form')
const email = document.querySelector('#email')
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function verifyEmail(event) {
    event.preventDefault();

    if (email.value.match(emailFormat)) {
        email.classList.add('success')
    } else {
        email.classList.add('error')
    }
}

// on form submit, verify the inputs
form.addEventListener('submit', verifyEmail);