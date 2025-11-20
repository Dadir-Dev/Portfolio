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
  {
    id: 2,
    title: "Color Flipper",
    description:
      "A simple and interactive web app that lets you change the background color by clicking a button. You can switch between Simple and Hex color modes, and even copy the color code with one click.",
    image: "/assets/Color Flipper.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://dadir-dev.github.io/color-flipper/",
    githubLink: "https://github.com/Dadir-Dev/color-flipper",
  },
];

// ===== Function to create project card HTML =====
function createProjectCard(project) {
  return `
    <div class="project-card">
              <div class="project-image">
                <img
                  src="${project.image}"
                  alt="${project.title}"
                />
                <div class="project-overlay">
                  <a
                    href="${project.liveDemo}"
                    class="btn"
                    target="_blank"
                    >view Details</a
                  >
                </div>
              </div>
              <div class="project-info">
                <h3>${project.title}</h3>
                <p>
                  ${project.description}
                </p>
                <div class="project-tags">
                  ${project.tags
                    .map((tag) => `<span class="tag">${tag}</span>`)
                    .join("")}
                </div>
                <div class="project-links">
                  <a
                    href="${project.liveDemo}"
                    class="project-link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i>Live Demo</a
                  >
                  <a
                    href="${project.githubLink}"
                    class="project-link"
                    target="_blank"
                    ><i class="fab fa-github"></i>Github</a
                  >
                </div>
              </div>
            </div>
    `;
}

// ===== Function to render projects =====
function renderProjects() {
  const projectsContainer = document.querySelector(".projects-grid");
  projectsData.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectsContainer.innerHTML += projectCard;
  });
}

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

// ===== Render projects when the page loads =====
window.addEventListener("load", function () {
  renderProjects();
  initScrollAnimations();
});
