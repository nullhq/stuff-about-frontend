const subscribe = document.querySelector('form input[type="submit"]')
const email = document.querySelector('form input[type="text"]')
const errorTxtMobile = document.querySelector('form div>p')
const desktopErrorTxt = document.querySelector('form>p')

function isValidEmail(mail) {
    //Regular expression for check mail
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/
    return emailRegex.test(mail)
  }


//    example@email/com

subscribe.addEventListener("click", function(e) {
    
    e.preventDefault()

    if (email.value == "") {
        errorTxtMobile.innerHTML = "Whoops! It looks like you forgot to add your email"
        desktopErrorTxt.innerHTML = "Whoops! It looks like you forgot to add your email"
    } else{
        errorTxtMobile.innerHTML = "Please provide a valid email address"
        desktopErrorTxt.innerHTML = "Please provide a valid email address"
    }

    if (isValidEmail(email.value)) {
        email.classList.remove('error-i')
        desktopErrorTxt.classList.remove('error-p')
        errorTxtMobile.classList.remove('error-p')
        console.log(
            `Yes, this is valid email : ${email.value}`
        );
    } else {
        email.classList.add('error-i')
        desktopErrorTxt.classList.add('error-p')
        errorTxtMobile.classList.add('error-p')
        email.value = "example@email.com"
    }




})

// Coded by @MrDeveloper01010