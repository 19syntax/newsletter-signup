const emailInput = document.querySelector('input');
const error = document.querySelector('.error');
const jsForm = document.querySelector('form');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const responseEmail = document.querySelector('.email-name');


jsForm.addEventListener('submit', validateEmail)


function validateEmail(e){
    e.preventDefault()
    const emailInputValue = emailInput.value;
    if (emailInputValue === "" || !isEmail(emailInputValue)) {
        error.innerHTML = "Invalid email"
    } else {
        container.style.display = 'none'
        container2.style.display = 'block'
        responseEmail.innerHTML = emailInputValue;
    }
}

function isEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}
// console.log(jsForm)
