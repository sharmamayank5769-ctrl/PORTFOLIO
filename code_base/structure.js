const menuBtn = document.querySelector('.nav-container h5');
const navLinks = document.querySelector('.nav-links');
const githubBtn = document.querySelector('.github-btn');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  // Icon change
  const icon = menuBtn.querySelector('i');
  if (navLinks.classList.contains('open')) {
    icon.classList.remove('ri-menu-line');
    icon.classList.add('ri-close-line');
  } else {
    icon.classList.remove('ri-close-line');
    icon.classList.add('ri-menu-line');
  }
});

// Link click pe menu band
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const icon = menuBtn.querySelector('i');
    icon.classList.remove('ri-close-line');
    icon.classList.add('ri-menu-line');
  });
});

// Bahar click pe band
document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('open');
    const icon = menuBtn.querySelector('i');
    icon.classList.remove('ri-close-line');
    icon.classList.add('ri-menu-line');
  }
});
