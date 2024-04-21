// BASE APPAREL
const imgError =  document.querySelector('.check-mail img.frst')
const bgOFTheSender = document.querySelector('.check-mail button')
const borderOfInput = document.querySelector('.check-mail input')
const visibleMSG = document.querySelector('.left-part-coming-soon p.last')
const theSender = document.querySelector('button.send-mail')
const iptValue = document.querySelector('div.check-mail input')

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
let getTestValue = null

theSender.addEventListener("click", function() {
    if (getTestValue !=null && validateEmail(iptValue.value)) {
        imgError.classList.remove('error')
        bgOFTheSender.classList.remove('btn-error')
        borderOfInput.classList.remove('ipt-error')
        visibleMSG.classList.remove('visible')
        getTestValue=null
    }else if (getTestValue===null) {
        getTestValue= "ok"
        imgError.classList.add('error')
        bgOFTheSender.classList.add('btn-error')
        borderOfInput.classList.add('ipt-error')
        visibleMSG.classList.add('visible')
    }
})