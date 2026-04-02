const animate = (): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const animation = element.dataset.animate ?? '';

        element.classList.add(...animation.split(' '));
        observer.unobserve(element);
      }
    });
  }, {
    rootMargin: '0px 0px -80px 0px',
    threshold: 0
  });

  const elements = document.querySelectorAll('[data-animate]');

  elements.forEach((element) => {
    observer.observe(element);
  });
};

export { animate };