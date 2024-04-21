const shareButton = document.querySelector(".share-ico")
const parentDisplayContainer = document.querySelector(".display-part-current-hidden")
const childDisplayContainer = document.querySelector(".hover-visible-link-container")

shareButton.addEventListener("click", function() {
            parentDisplayContainer.classList.toggle("view-parent")
            childDisplayContainer.classList.toggle("view-child") 
            shareButton.classList.toggle("viewer")

    });
