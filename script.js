const prefersReducedMotion =
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

// ===== Particles Config =====
function initParticles() {
  const target = document.getElementById("particles-js");
  if (!target) return;
  if (prefersReducedMotion) return;
  if (typeof window.particlesJS !== "function") return;

  const isSmallScreen = window.innerWidth <= 768;

  window.particlesJS("particles-js", {
    particles: {
      number: {
        value: isSmallScreen ? 40 : 60,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#7c3aed" },
      shape: { type: "circle" },
      opacity: { value: 0.2 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#7c3aed",
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } } },
    },
    retina_detect: true,
  });
}

// ===== Project Data =====
const projectsData = [
  {
    title: "Jumlazon E-commerce",
    description:
      "Jumlazon is a full-featured e-commerce frontend clone that mimics the core shopping experience of Amazon. Browse products, manage your cart with local persistence, and complete a multi-step checkout flow—all with a clean, responsive UI.",
    image: "./assets/Jumlazon-home.png",
    tags: ["HTML", "TailwindCSS", "JavaScript"],
    liveDemo: "https://jumlazon-project.vercel.app/",
    githubLink: "https://github.com/Dadir-Dev/jumlazon-project",
  },
  {
    title: "Queue Management System",
    description:
      "QueueFlow Pro is a modern queue management app built with React, Vite, and Tailwind CSS. It provides a clean dashboard for tracking customers in real time, updating service status, and monitoring overall queue performance.",
    image: "./assets/QueueFlow-Pro_Desktop Design 2026-02-12.png",
    tags: ["React", "Vite", "TailwindCSS"],
    liveDemo: "https://queue-management-five.vercel.app/",
    githubLink: "https://github.com/Dadir-Dev/queue-management",
  },
  {
    title: "Dynamic Invoice Generator",
    description:
      "A modern, responsive invoice builder built with React + Vite + Tailwind CSS. Create line items, configure tax/discount, edit billing details, and switch into a polished invoice preview in real time.",
    image: "./assets/Invoice-Editor Screenshot 2026-02-18 180154.png",
    tags: ["React", "Vite", "TailwindCSS"],
    liveDemo: "https://dynamic-invoice-generator.vercel.app/",
    githubLink: "https://github.com/Dadir-Dev/dynamic-invoice-generator",
  },
];

// ===== Render Projects =====
function renderProjects() {
  const container = document.querySelector(".projects-grid");
  if (!container) return;

  container.innerHTML = projectsData
    .map(
      (p) => `
    <div class="project-card">
      <div class="project-image">
        <img src="${p.image}" alt="${p.title}" loading="lazy" decoding="async">
      </div>
      <div class="project-info">
        <h3>${p.title}</h3>
        <div class="project-tags">
          ${p.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <p>${p.description}</p>
        <div class="project-links">
          <a
            href="${p.liveDemo}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${p.title} live demo"
            class="btn btn-outline"
          >Demo</a>
          <a
            href="${p.githubLink}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${p.title} source code on GitHub"
            class="btn btn-outline btn-icon"
          ><i class="fab fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  initScrollReveal();
}

// ===== Scroll Reveal & Header Effects =====
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".project-card, .about-text")
    .forEach((el) => observer.observe(el));
}

function initHeaderEffects() {
  const header = document.querySelector("header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const button = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (!button || !navLinks) return;

  const setOpen = (open) => {
    navLinks.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("nav-open", open);
  };

  const isOpen = () => button.getAttribute("aria-expanded") === "true";

  button.addEventListener("click", () => setOpen(!isOpen()));

  navLinks.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) setOpen(false);
  });

  document.addEventListener("click", (e) => {
    if (!isOpen()) return;
    const target = e.target;
    if (button.contains(target)) return;
    if (navLinks.contains(target)) return;
    setOpen(false);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!isOpen()) return;
    setOpen(false);
    button.focus();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setOpen(false);
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  renderProjects();
  initHeaderEffects();
  initMobileMenu();
});
