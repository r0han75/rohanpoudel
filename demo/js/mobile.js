const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const cross = document.querySelector("#cross");
let navOpen = false;


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    console.log("yes this is worlking/")
    navOpen = true;
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    window.addEventListener('scroll', () => {
        if (navOpen) {
            navOpen = false;
            console.log("yes scrolling");
            links.forEach(link => {
                link.classList.toggle("fade");
            });
            navLinks.classList.toggle("open");
        }
    })
});

// * For removing the bubble from the cross

cross.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navOpen = false;
    console.log("yes this is worlking/")
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});
const notice = document.querySelector(".popup");
window.onload = function() {
    setTimeout(function() {
        notice.style.display = "block";
    }, 1000)
}
const img = document.querySelector("#popupimg");
img.addEventListener('click', () => {
    notice.style.display = "none";
})