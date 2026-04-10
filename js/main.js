// Fade-in on scroll via IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Expandable cards — one open at a time per grid group
document.querySelectorAll('.expand-card').forEach((card) => {
  card.addEventListener('click', () => {
    const isOpen = card.classList.contains('open');
    const group = card.closest('.grid-3, .process-grid');

    // Close all in this group
    if (group) {
      group.querySelectorAll('.expand-card.open').forEach((el) => el.classList.remove('open'));
    }

    // Open this one if it was closed
    if (!isOpen) {
      card.classList.add('open');
    }
  });
});

// Mark active nav link based on current path
const path = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.nav-links a').forEach((link) => {
  const href = new URL(link.href).pathname.replace(/\/$/, '') || '/';
  if (href === path) {
    link.classList.add('active');
  }
});
