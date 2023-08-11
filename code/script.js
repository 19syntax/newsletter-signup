const emailInput = document.querySelector('.email-input')
const error = document.querySelector('.error')
const jsForm = document.querySelector('.js-form')

emailInput.addEventListener('input', () => {

})
jsForm.addEventListener('submit', (e) => {
    if(emailInput.value === '' || emailInput.value === null){
        error.innerHTML = 'Email is Required'
        e.preventDefault()    
    }
    if(emailInput.value == "admin@gmail.com"){
        alert('Login successful')
        window.location.replace("success.html");
    } else{
        error.innerHTML = 'Invalid Email'
        emailInput.value == ''
        e.preventDefault()
    }
    
})
// console.log(jsForm)
console.log(error.innerHTML)