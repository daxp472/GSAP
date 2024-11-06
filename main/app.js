// Ensure the DOM is fully loaded before running animations
document.addEventListener("DOMContentLoaded", function() {
    // Fade-in for header items
    gsap.from(".top", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });

    // Slide-in animations for main buttons
    gsap.from(".main-btn", { 
        duration: 1.2, 
        x: -200, 
        opacity: 0, 
        ease: "power3.out", 
        delay: 0.5 
    });

    // Fade-in effect for content with stagger (sequence delay)
    gsap.from(".content", { 
        duration: 1, 
        opacity: 0, 
        scale: 0.95, 
        ease: "power2.out", 
        delay: 0.8 
    });
});

// Get the container element that holds your scrollable content
const container = document.querySelector('.container');

// Set the initial scroll position
let scrollPosition = 0;

// Function to handle scrolling
function handleScroll() {
    // Get the current scroll position
    const currentScrollPosition = window.scrollY;

    // Check if the scroll position has changed
    if (currentScrollPosition !== scrollPosition) {
        // Update the scroll position
        scrollPosition = currentScrollPosition;

        // Determine the current section
        const sectionIndex = Math.floor(scrollPosition / window.innerHeight);

        // Apply scrolling behavior based on the section index
        if (sectionIndex === 2) { // Section 3
            // Horizontal scroll effect for section 3
            container.style.transform = `translateX(${-scrollPosition}px)`; // Scroll left
        } else {
            // Reset to normal vertical scroll for other sections
            container.style.transform = `translateY(${-scrollPosition}px)`; 
        }
    }

    // Request the next frame
    requestAnimationFrame(handleScroll);
}

// Start the scrolling animation
handleScroll();

// SVG Click Animation
document.addEventListener("DOMContentLoaded", function() {
    // Get all SVG elements
    const svgs = document.querySelectorAll(".svgs");

    // Add click event listener to each SVG
    svgs.forEach(svg => {
        svg.addEventListener("click", () => {
            svg.classList.toggle("active"); // Toggle 'active' class
            console.log("SVG clicked!");
            // Example of animating an SVG on click
            gsap.to(svg, { rotation: 360, duration: 0.5 }); // Rotate on click
        });
    });
});
