// function myFunction() {
//     if (window.innerWidth > 550) {
//         const element1 = document.getElementById("cont-1");
//         delete element1.dataset.aos;
//         const element2 = document.getElementById("cont-2");
//         delete element2.dataset.aos;
//         const element3 = document.getElementById("cont-3");
//         delete element3.dataset.aos;
//         const element4 = document.getElementById("cont-4");
//         delete element4.dataset.aos;
//     }
// }

const elements = document.querySelectorAll(".desktop");

if (window.innerWidth > 550) {
    elements.forEach(element => {
        delete element.dataset.aos;
    });

};