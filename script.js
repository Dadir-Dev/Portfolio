// ===== Projects Data =====
const projectsData = [
  {
    id: 1,
    title: "Random Quote Generator",
    description:
      "A responsive, theme-rich Random Quote Generator. Lets users explore inspiring quotes from multiple categories, switch between light/dark/image themes, and copy quotes with one click.",
    image: "/assets/Random Quote Generator.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://stupendous-llama-70eb07.netlify.app/",
    githubLink: "https://github.com/Dadir-Dev/random-quote-generator",
  },
];

// Re-initialize scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".about-image, .about-text, .project-card")
    .forEach((el) => {
      observer.observe(el);
    });
}

initScrollAnimations();
