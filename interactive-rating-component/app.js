const ratingParentELT = document.querySelectorAll(".rat-state-start .feedback-container-value span");
const getValueOfFeedback = document.querySelector(".add-rating-container");
const submitFeedback = document.querySelector(".rat-state-start button");
const feedback = document.querySelector(".rat-state-start");
const thankYou = document.querySelector(".thank-y-state-start");

let lastClickedELT = null;

for (let i = 0; i < ratingParentELT.length; i++) {
  ratingParentELT[i].addEventListener("click", function() {
    if (lastClickedELT !== null) {
      lastClickedELT.style.backgroundColor = "";
      lastClickedELT.style.color = "";
    }
    lastClickedELT = this;

    
    this.style.backgroundColor = "hsl(216, 12%, 54%)";
    this.style.color = "hsl(0,0%,100%)";
    getValueOfFeedback.innerText = this.innerText;
    return lastClickedELT;
  });
}

submitFeedback.addEventListener("click", function() {
  if (lastClickedELT !== null) {
    feedback.classList.add("hide");
    thankYou.classList.remove("hide");
  } else {
    alert("Please update your feedback before submitting.");
  }
});
