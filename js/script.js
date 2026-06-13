var typed = new Typed("#typing", {

    strings: [
        "Frontend Developer",
        "Web Designer",
        "Tech Enthusiast",
        "Problem Solver"
    ],

    typeSpeed: 70,

    backSpeed: 50,

    backDelay: 1500,

    loop: true

});
window.addEventListener("scroll", () => {

    let scrollTop =
        document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById(
        "progress-bar"
    ).style.width = progress + "%";

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");
        }
    });
});
window.onload = function(){

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", function(){

        if(window.scrollY > 300){

            topBtn.style.display = "block";

        }else{

            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"
        });

    });

};
