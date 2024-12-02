document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Horizontal scroll
    gsap.to(".scroll-container", {
        xPercent: -300, 
        ease: "none",
        scrollTrigger: {
            trigger: ".scroll-container",
            pin: true, // Pin the container
            scrub: 1, 
            start: "top top",
            end: "+=1000",
        },
    });
});
