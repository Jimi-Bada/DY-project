modalContainer = document.querySelector(".modal-container");
googleSignupBtn= document.querySelector(".google-signup-btn");
closeModaLBtn = document.querySelector(".close-modal-btn");



googleSignupBtn.addEventListener("click", ()=>{
    modalContainer.classList.add("show-modal")
});
closeModaLBtn.addEventListener("click", ()=>{
    modalContainer.classList.remove("show-modal")
});