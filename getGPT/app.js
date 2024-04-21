const openLeftPart = document.querySelector('.header__partOf__mobile i:first-child')
const closeLeftPart = document.querySelector('.close')
const LeftPart = document.querySelector('.getGPT__left__nav__part')
const rightPartContainer = document.querySelector('.getGPT__right__bodyCenter__part')

openLeftPart.addEventListener('click', ()=>{
    LeftPart.classList.add('mL__adaptation');
    rightPartContainer.classList.add('mR__adaptation');
    console.log(" Verification, Left bar is open...");
    closeLeftPart.classList.add('displayClose')
})

rightPartContainer.addEventListener('click', ()=>{
    console.log(" Verification, Left bar is close...");

})

closeLeftPart.addEventListener('click', ()=>{
    LeftPart.classList.remove('mL__adaptation')
    closeLeftPart.classList.remove('displayClose')
    rightPartContainer.classList.remove('mR__adaptation')
})