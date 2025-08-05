
// Smooth scroll for nav links
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  });
});

// Fade-in on scroll for .animated elements
function revealOnScroll() {
  const animatedEls = document.querySelectorAll(".animated");
  const windowHeight = window.innerHeight;
  animatedEls.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 60) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);

// Neon ripple effect for CTA button
const ctaBtn = document.querySelector(".cta-button");
if (ctaBtn) {
  ctaBtn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = e.offsetX + "px";
    ripple.style.top = e.offsetY + "px";
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

// Hamburger menu functionality
const navToggle = document.querySelector(".nav-toggle");
const navLinksContainer = document.querySelector(".nav-links");
if (navToggle && navLinksContainer) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinksContainer.classList.toggle("open");
  });
  // Close menu when a link is clicked (on mobile)
  navLinksContainer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        navToggle.classList.remove("active");
        navLinksContainer.classList.remove("open");
      }
    });
  });
}

// Add ripple effect styles dynamically
const rippleStyle = document.createElement("style");
rippleStyle.innerHTML = `
.cta-button { position: relative; overflow: hidden; }
.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(0,255,136,0.4);
  box-shadow: 0 0 18px 6px #00ff88;
  transform: scale(0);
  animation: ripple-effect 0.6s linear;
  pointer-events: none;
  width: 120px;
  height: 120px;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  z-index: 2;
}
@keyframes ripple-effect {
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}`;
document.head.appendChild(rippleStyle);
