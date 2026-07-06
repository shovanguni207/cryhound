// Roadmap boxes pop upward into view as the user scrolls to them.
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.roadmap-box');

  if (!('IntersectionObserver' in window) || boxes.length === 0) {
    // Fallback: just show the boxes if IntersectionObserver isn't supported.
    boxes.forEach(box => box.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // animate once, not every scroll
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px'
  });

  boxes.forEach(box => observer.observe(box));
});
