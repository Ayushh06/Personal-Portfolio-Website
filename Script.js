 const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.onclick = () => {
navLinks.classList.toggle('active');
}
var typed = new Typed("#typing-text", {
    strings: ["MCA Undergrad", "Python Developer", "Frontend Developer", "Coder"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1200,
    loop: true
});
