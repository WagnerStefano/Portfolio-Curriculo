const body = document.querySelector("body");
const darkmode = document.querySelector(".darkmode");
const sunIcon = document.querySelector(".darkmode .bxs-sun");
const moonIcon = document.querySelector(".darkmode .bx-moon");

darkmode.addEventListener("change", () => {
    
    body.classList.div("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

});