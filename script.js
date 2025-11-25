// ===== Particles.js Background Animation =====
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#6c63ff", "#ff6584", "#00d9ff"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6c63ff",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

// Rest of your existing JavaScript code...
// ===== Projects Data =====
const projectsData = [
  {
    id: 1,
    title: "Random Quote Generator",
    description:
      "A responsive quote generator offering inspiring categories, multiple visual themes, and one-click copying, helping users explore motivation through an adaptable web experience.",
    image: "./assets/Random Quote Generator.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://stupendous-llama-70eb07.netlify.app/",
    githubLink: "https://github.com/Dadir-Dev/random-quote-generator",
  },
  {
    id: 2,
    title: "Color Flipper",
    description:
      "A simple interactive app that changes background colors, lets you switch between Simple and Hex modes, and copy the shown color code.",
    image: "assets/Color Flipper.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://dadir-dev.github.io/color-flipper/",
    githubLink: "https://github.com/Dadir-Dev/color-flipper",
  },
  {
    id: 3,
    title: "Deep Focus",
    description:
      "A streamlined single-page study tracker that helps you monitor focus sessions, review productivity trends, and improve daily habits through an intuitive interface.",
    image: "assets/Deep Focus Tracker.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://dadir-dev.github.io/Deep-Focus-Tracker/",
    githubLink: "https://github.com/Dadir-Dev/Deep-Focus-Tracker",
  },
];

// ===== DOM Elements =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li");

// ===== Hamburger Menu Toggle =====
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on links
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navLinks.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

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
    .querySelectorAll(".about-image, .about-text, .project-card, .contact")
    .forEach((el) => {
      observer.observe(el);
    });
}

// ===== Render projects when the page loads =====
window.addEventListener("load", function () {
  renderProjects();
  initScrollAnimations();
});
