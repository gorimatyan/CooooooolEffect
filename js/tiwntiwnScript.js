const img = document.querySelector("img")
const circles = document.querySelector(".circles")
const circle = document.querySelector(".circles li div")
const background = document.getElementById("background")
const background2 = document.getElementById("background2")
const reBackground2 = document.getElementById("reBackground2")
const laser = document.getElementById("laser")
const laser2 = document.getElementById("laser2")

img.addEventListener("click", (ev) => {
    // ev.target.style.display = "none"
    ev.target.classList.add("delete")
    background.classList.add("background")
    background2.classList.add("background2")
    laser.classList.add("laser")
    laser2.classList.add("laser2")
    setTimeout(() => {
        reBackground2.classList.add("background2")
    },50)
    setTimeout(() => {
        circles.style.display = "block"
    }, 500);
})

circle.addEventListener("animationend", () => {
  circles.style.display = "none"
  img.style.display = "block"
})