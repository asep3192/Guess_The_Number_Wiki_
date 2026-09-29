
const openBtn = document.querySelector(".open-modal");
const modalnavbar = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");

function openModalnavbar() {
    modalnavbar.classList.remove("hide");
}

function closeModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-overlay"))
            modalnavbar.classList.add("hide");
    } else modalnavbar.classList.add("hide");
}

openBtn.addEventListener("click", openModalnavbar);
modalnavbar.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);