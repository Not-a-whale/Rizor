/* Elements */

const scrollIndicatorBlocks = document.querySelectorAll(".scroll-indicator__block");
const sections = document.querySelectorAll('section');
const splitText = document.querySelectorAll('.split-text');
const windowHeight = window.innerHeight;

/* Events */

scrollIndicatorBlocks.forEach(block => block.addEventListener('mouseover', (e) => {
    scrollIndicatorBlocks.forEach(blockInner => blockInner.classList.remove('circle-active'));
    block.classList.add('circle-active');
}));

scrollIndicatorBlocks.forEach((block, index) => {
    block.addEventListener('click', () => {
        window.scrollTo({
            top: index * (windowHeight + 40),
            behavior: 'smooth'
        })
    })
})

/* GSAP Stuff */

gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function() {
// Adding classes 

gsap.to(".header", {
    scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        end: `${document.body.scrollHeight + 400} top`,
        toggleClass: "header-scrolled"
    }
})

gsap.to(".scroll-indicator__block--main", {
    scrollTrigger: {
        trigger: ".main",
        start: "0 center",
        end: "700 center",
        scrub: true,
        toggleClass: {targets: ".scroll-indicator__block--main", className: "circle-active"}
    },
})

gsap.to(".scroll-indicator__block--advantages", {
    scrollTrigger: {
        trigger: ".advantages",
        start: "0 center",
        end: "700 center",
        scrub: true,
        toggleClass: {targets: ".scroll-indicator__block--advantages", className: "circle-active"}
    },
});

gsap.to(".scroll-indicator__block--modes", {
    scrollTrigger: {
        trigger: ".modes",
        start: "0 center",
        end: "700 center",
        scrub: true,
        toggleClass: {targets: ".scroll-indicator__block--modes", className: "circle-active"}
    },
});

gsap.to(".scroll-indicator__block--auditory", {
    scrollTrigger: {
        trigger: ".auditory",
        start: "0 center",
        end: "700 center",
        scrub: true,
        toggleClass: {targets: ".scroll-indicator__block--auditory", className: "circle-active"}
    },
});

// Adding classes ends 


// Adding animations to the main section  

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main",
        start: "-50 top",
        end: "700 top",
        scrub: true,
    }
});



gsap.to(".image-box__arrow-case", {
    scrollTrigger: {
        trigger: ".main",
        start: "-50 top",
        end: "50% top",
        scrub: true
        },
        y: -600, 
        zIndex: 999,
        duration: 1, 
        ease: "back"
});

gsap.to(".main__title", {
scrollTrigger: {
    trigger: ".main",
    start: "-50 top",
    end: "50% top",
    scrub: true
    },
    opacity: 0,
    duration: 1, 
    ease: "back"
});

gsap.to(".main__subtitle", {
    scrollTrigger: {
        trigger: ".main",
        start: "-50 top",
        end: "50% top",
        scrub: true
        },
        opacity: 0,
        duration: 1, 
        ease: "back"
});


gsap.to(".main__subtitle", {
    scrollTrigger: {
        trigger: ".main",
        start: "-50 top",
        end: "50% top",
        scrub: true
        },
        opacity: 0,
        duration: 1, 
        ease: "back"
});

gsap.to(".main__down-arrow", {
    scrollTrigger: {
        trigger: ".main",
        start: "-50 top",
        end: "50% top",
        scrub: true
        },
        y: 100,
        duration: 1, 
        ease: "back"
})
gsap.to(".main__down-arrow", {
    scrollTrigger: {
        trigger: ".main",
        start: "-50 top",
        end: "50% top",
        scrub: true, 
        },
        opacity: 0,
        duration: 2, 
        ease: "back"
});

tl.to(".main__cog", {x: -500, duration: 1, stagger: 0.1, ease: "back"})
.to(".image-box__image", {x: 1200, zIndex: -999, stagger: 0.1, duration: 2, ease: "back"})
.to(".main__title", {opacity: 0, duration: 1});

// Adding to the main section ends 

// Adding anims to .advantages

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".advantages",
        start: "60% center",
        end: "700 center",
        scrub: true,
    }
})

gsap.to(".advantages__background", {
    scrollTrigger: {
        trigger: ".advantages",
        start: "30% center",
        end: "700 center",
        scrub: true,
    },
        opacity: 0,
        duration: 1, 
        ease: "back"
});
gsap.to(".advantages__img-container--inner", {
    scrollTrigger: {
        trigger: ".advantages",
        start: "70% center",
        end: "140% center",
        scrub: true,
    },
        x: -800,
        duration: 1, 
        ease: "back"
});
gsap.to(".advantages__color", {
    scrollTrigger: {
        trigger: ".advantages",
        start: "90% center",
        end: "1300 center",
        scrub: true,
    },
        x: 800,
        duration: 1, 
        ease: "back"
}); 

tl2.to(".advantages__heading", {y: -200, duration: 0.1, stagger: 0.1, ease: "back"})
.to(".design__heading", {y: -200, duration: 0.2, stagger: 0.1, ease: "back"})
.to(".design__text", {y: -200, duration: 0.3, stagger: 0.1, ease: "back"})
.to(".design__list-item", {y: -200, duration: 0.1, stagger: 0.1, ease: "back"})

// Adding to advantages ends 

// Adding to modes 

gsap.to(".modes__image-container", {
    scrollTrigger: {
        trigger: ".modes",
        start: "90% center",
        end: "180% center",
        scrub: true,
    },
        x: 800,
        duration: 1, 
        ease: "back"
});

gsap.to(".modes__cog", {
    scrollTrigger: {
        trigger: ".modes",
        start: "90% center",
        end: "180% center",
        scrub: true,
    },
        x: -800,
        duration: 1, 
        ease: "back"
});


gsap.to(".modes__block", {
    scrollTrigger: {
        trigger: ".modes",
        start: "40% center",
        end: "180% center",
        scrub: true,
    },
        opacity: 0,
        duration: 1, 
        ease: "back"
});

// Adding to modes ends

// Adding to auditory

gsap.from(".auditory__container-image--kids", {
    scrollTrigger: {
        trigger: ".auditory",
        start: "top center",
        end: "bottom center",
        scrub: true,
    },
    opacity: 0,
    duration: 1, 
    ease: "back"
})
    }
})




// split text functions

document.addEventListener("mouseover", (e)=> {
    if(e.target.classList[0] === "split-text") {
    splitText.forEach((splitTextChar, index) => {
        gsap.to(`.split-text-${index}`, {
            fontSize: Number(`${generateMathSign()}${generateRandomNumber(52)}`),
            y: Number(`${generateMathSign()}${generateRandomNumber()}`),
            rotation: Number(`${generateMathSign()}${generateRandomNumber()}`)
        });
    })
    }
});

/* document.addEventListener("mouseout", (e)=> {
    console.log(e.target.classList[0] );
    if(e.target.classList[0] === "split-text") {
        gsap.from(".split-text", {
            fontSize: Number(`${generateMathSign()}${generateRandomNumber(40)}`),
            y: 0,
            rotation: 0
        });
    }
})
 */


//  split text functions end 

// helper functions 


function generateRandomNumber(num = 360) {
    return Math.floor(Math.random() * num);
}

function generateMathSign() {
    let number = Math.floor(Math.random() * 2);
    console.log(number > 0 ? '+' : '-');
    return number > 0 ? '+' : '-';
}