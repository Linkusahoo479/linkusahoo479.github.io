// -------- Scroll Reveal Animation --------

function revealElements(selector){
    const elements = document.querySelectorAll(selector)
    const triggerBottom = window.innerHeight / 5 * 4

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            el.classList.add("show")
        } else {
            el.classList.remove("show")
        }
    })
}

window.addEventListener("scroll", () => {
    revealElements(".project-main")
    revealElements(".cont-box-1")
    revealElements("#skills1>#skills-container1>div")
    revealElements(".skill-2")
    revealElements(".abt-img-c")
    revealElements(".skills-box")
})


// -------- Navbar + Scroll Button --------

$(document).ready(function () {

    $(window).scroll(function () {

        // sticky navbar
        if (this.scrollY > 100) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        // scroll-up button
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }

    });

    // scroll to top
    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        $("html").css("scrollBehavior", "auto");
    });

    // smooth scroll
    $(".navbar .menu li a").click(function () {
        $("html").css("scrollBehavior", "smooth");
    });

    // mobile menu toggle
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });


// -------- Typing Animation --------

    new Typed(".typing", {
        strings: [
            "Java Backend Developer",
            "Manual Testing Engineer",
            "Automation Test Engineer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


// -------- Owl Carousel --------

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{items:1, nav:false},
            600:{items:2, nav:false},
            1000:{items:3, nav:false}
        }
    });

});


// -------- About Section Links --------

const mailBtn = document.querySelector(".abt-img-1");
if(mailBtn){
mailBtn.addEventListener("click", () => {
    window.location.href="mailto:linkusahoo479@gmail.com?subject=regarding hiring";
});
}

const githubBtn = document.querySelector(".abt-img-2");
if(githubBtn){
githubBtn.addEventListener("click", () => {
    window.open("https://github.com/Linkusahoo479", "_blank");
});
}

const linkedinBtn = document.querySelector(".abt-img-3");
if(linkedinBtn){
linkedinBtn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/soumyaranjan7321/", "_blank");
});
}

const twitterBtn = document.querySelector(".abt-img-4");
if(twitterBtn){
twitterBtn.addEventListener("click", () => {
    window.open("https://twitter.com/Ssmr_2654", "_blank");
});
}


// -------- Contact Section --------

const emailContact = document.querySelector(".cont-box-b");
if(emailContact){
emailContact.addEventListener("click", () => {
    window.location.href="mailto:linkusahoo479@gmail.com?subject=regarding hiring";
});
}

const githubContact = document.querySelector(".cont-box-d");
if(githubContact){
githubContact.addEventListener("click", () => {
    window.open("https://github.com/Linkusahoo479", "_blank");
});
}

const linkedinContact = document.querySelector(".cont-box-c");
if(linkedinContact){
linkedinContact.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/soumyaranjan7321/", "_blank");
});
}

const twitterContact = document.querySelector(".cont-box-e");
if(twitterContact){
twitterContact.addEventListener("click", () => {
    window.open("https://twitter.com/Ssmr_2654", "_blank");
});
}


// -------- Resume Download --------

function downloadResume(){
    window.open(
    "https://drive.google.com/file/d/1bntf7KzL8fp8bQ7rdL4dbnsvLgF-8X8h/view?usp=drive_link/view",
    "_blank"
    );
}