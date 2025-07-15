const lazyImages = document.querySelectorAll('img[data-src]');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;

      // Simulate slow network (e.g., 1.5 seconds delay)
      setTimeout(() => {
        img.src = img.dataset.src;
        img.onload = () => {
          img.classList.add('loaded'); // Remove blur after load
          img.removeAttribute('data-src');
        };
      }, 1500); // Simulated delay in milliseconds

      obs.unobserve(img);
    }
  });
});

lazyImages.forEach(img => observer.observe(img));
