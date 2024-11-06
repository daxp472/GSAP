// GSAP Animations

// Hero section animation
gsap.from(".hero h2", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
  });
  
  gsap.from(".hero p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5
  });
  
  gsap.from(".cta", {
    duration: 1.8,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 1
  });
  
  // Features section animation
  gsap.from(".feature", {
    duration: 1,
    opacity: 0,
    y: 100,
    stagger: 0.3,  // Animate each feature with a small delay
    ease: "power2.out"
  });
  