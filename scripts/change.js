let noteActive = document.querySelector("nav ul li");

noteActive.classList.add("active");

function chooseActive(event) {
    event.target.classList.add("active");
}


noteActive.addEventListener("click", chooseActive);