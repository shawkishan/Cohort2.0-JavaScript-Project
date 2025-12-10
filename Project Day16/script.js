let cursor = document.querySelector("#cursor");

function loadSlider() {
    let slides = document.querySelector(".slides");
    let dots = document.querySelector(".dots");
    let slidesData = [
        {
            src: "./Assets/slider 1 img 1.webp",
            h1: "SIGN UP",
            p: `Create an account on play.gripnr.com today, and we’ll give you a free Hero! Playable
                                Heroes are randomly generated so each one is totally unique with their own combination
                                of artwork, ancestry, class, background, weapons, and more`
        },
        {
            src: "./Assets/slider 1 img 2.webp",
            h1: "Join the Community",
            p: `community to meet your fellow players and game masters. New to DnD? We'll get you started with a tutorial to show you ropes and prepare you for your first game.`
        },
        {
            src: "./Assets/slider 1 img 3.webp",
            h1: "Play a game",
            p: `Search The Hall for a game that’s right for you. Once you’ve found a game and booked it, follow the prompts to select your Hero, equip them with some badass weapons, connect with your Game Master and fellow Heroes going on your adventure, kick ass, and score some treasure. It’s that easy.`
        },
        {
            src: "./Assets/slider 1 img 4.webp",
            h1: "Score treasure",
            p: `When you finish the game, you are rewarded with treasure items including weapons, armor, scrolls, potions, and wondrous items. They're yours to equip and use in any future game.`
        },
        {
            src: "./Assets/slider 1 img 5.webp",
            h1: "Level up",
            p: `All game outcomes, XP, and character progression are tracked, so you can always pick up where you left off. Earn enough XP to level up and unlock new adventures and treasure. Think you can make it to Level 20? Show us what ya got.`
        }
    ];
    let clutterSlide = "";
    let clutterDot = "";
    slidesData.forEach((slide, idx) => {
        clutterSlide += `
            <div class="slide ${idx === 0 ? "active" : ""}">
                        <img src="${slide.src}" alt="image" loading="lazy" class="up">
                        <div class="down">
                            <h1>${slide.h1}</h1>
                            <P>${slide.p}</P>
                        </div>
                    </div>
        `;
        clutterDot += `
        <span class="dot ${idx === 0 ? "active" : ""}" data-index="${idx}"></span>
        `;
    });
    slides.innerHTML = clutterSlide;
    dots.innerHTML = clutterDot;
}

function slider() {
    let dots = document.querySelectorAll(".dot");
    let slides = document.querySelectorAll(".slide");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let currentSlide = 0;

    let interId = null;

    function showSlide(index) {
        if (interId !== null) {
            clearInterval(interId);
        }
        slides.forEach(element => element.classList.remove("active"));
        dots.forEach(element => element.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
        currentSlide = index;

        interId = setInterval(() => {
            nextSlide();
        }, 3000);
    }

    function prevSlide() {
        let index;
        if (currentSlide === 0) {
            index = 2;
        }
        else {
            index = currentSlide - 1;
        }
        showSlide(index);
    }

    function nextSlide() {
        let index = (currentSlide + 1) % slides.length;
        showSlide(index);
    }

    prev.addEventListener("click", prevSlide);
    next.addEventListener("click", nextSlide);

    dots.forEach((ele) => {
        let index = Number(ele.getAttribute("data-index"));
        ele.addEventListener("click", () => {
            showSlide(index);
        })
    });


    showSlide(0);
}

loadSlider();
slider();

document.addEventListener("mousemove",(dets)=>{
    cursor.style.top = dets.clientY + "px"
    cursor.style.left = dets.clientX + "px"
});