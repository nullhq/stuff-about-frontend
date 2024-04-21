const submitForm = document.querySelector('.ipt-ctn:last-child>input');
const inputCtnValue = document.querySelectorAll('.ipt-ctn>input');

function getChildP(e) {
   return  e.parentNode.querySelector('p')
}

function getChildImg(e) {
    return  e.parentNode.querySelector('img')
 }

function addError(err) {
    getChildP(inputCtnValue[err]).classList.add('error-p')
    getChildImg(inputCtnValue[err]).classList.add('error-img')
    inputCtnValue[err].classList.add('error-i')
}

function removeError(rmErr) {
    getChildP(inputCtnValue[rmErr]).classList.remove('error-p')
    getChildImg(inputCtnValue[rmErr]).classList.remove('error-img')
    inputCtnValue[rmErr].classList.remove('error-i')
}

// For check email
function isValidEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    return emailRegex.test(email);
  }
  


submitForm.addEventListener("click", function(event){

    event.preventDefault();
    for (let i = 0; i < inputCtnValue.length - 1; i++) {
        if (inputCtnValue[i].value == "") {
            addError(i)
        }else{
            removeError(i)
        }
    }

    // Check email after the click !!
    if (isValidEmail(inputCtnValue[2].value)) {
        removeError(2)
        console.log(
            {
                FirstName : inputCtnValue[0].value,
                LastName : inputCtnValue[1].value,
                Mail : inputCtnValue[2].value,
                PassWord : inputCtnValue[3].value
            }
        )

        alert("SUCCESS !!")

    }else{
        addError(2)
    }
        
})
