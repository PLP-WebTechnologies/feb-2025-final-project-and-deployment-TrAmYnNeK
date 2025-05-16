// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  body.classList.add("dark-theme");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// Mobile Navigation Toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

// Back to Top Button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Highlight Active Page Link
const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Basic Form Validation (for forms with ID "feedback-form" or "newsletter-form")
document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.getElementById("feedback-form");
  const newsletterForm = document.getElementById("newsletter-form");

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("✅ Thank you for your feedback!");
      feedbackForm.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("📧 You're now subscribed to our newsletter!");
      newsletterForm.reset();
    });
  }
});
