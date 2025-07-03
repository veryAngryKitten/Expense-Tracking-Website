const depositOpenBtn = document.getElementById("depositOpenBtn")
const depositCloseBtn = document.getElementById("depositCloseBtn")
const depositPopup = document.getElementById("depositPopup")

depositOpenBtn.addEventListener("click", () => {
    depositPopup.classList.add("open")
})

depositCloseBtn.addEventListener("click", () => {
    depositPopup.classList.remove("open")
})