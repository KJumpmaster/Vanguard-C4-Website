const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.scene-copy, .visual-grid, .visual-hero-card, .store img, .store h2, .store p').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});
