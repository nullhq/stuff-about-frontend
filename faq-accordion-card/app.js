const eltForClick = document.querySelectorAll(".FAQ-card-container .faq-part-container .faq-txt .faq-txt-ctn>div:first-child")
const imgVariant = document.querySelector(".FAQ-card-container div.img-part-container img:last-child")
let currentOpenElt = null

for (let i = 0; i < eltForClick.length; i++) {
  const focusElt = eltForClick[i];
  const p = focusElt.parentNode.querySelector("p")
  const h2 = focusElt.querySelector("h2")
  const imgIco = focusElt.querySelector("img")

  focusElt.addEventListener("click", function() {

    if (currentOpenElt === focusElt) {
      imgVariant.classList.toggle("smooth")
      h2.classList.toggle("bold")
      imgIco.classList.toggle("rotate")
      p.classList.toggle("display")
      currentOpenElt = null
    } else {
      if (currentOpenElt !== null) {
        currentOpenElt.querySelector("h2").classList.remove("bold")
        currentOpenElt.querySelector("img").classList.remove("rotate")
        currentOpenElt.parentNode.querySelector("p").classList.remove("display")
        imgVariant.classList.remove("smooth")
      }
      imgVariant.classList.toggle("smooth")
      h2.classList.toggle("bold")
      imgIco.classList.toggle("rotate")
      p.classList.toggle("display")
      currentOpenElt = focusElt
    }
  });
}
