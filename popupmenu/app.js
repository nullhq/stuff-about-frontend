const getMenu = document.querySelector(".menu")
const getPoppupCtn = document.querySelector(".popup-container")

getMenu.addEventListener("click", ()=>{

    getPoppupCtn.classList.toggle("activate")

})