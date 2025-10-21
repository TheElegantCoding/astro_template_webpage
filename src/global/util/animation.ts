const animateElement = (element: HTMLElement, animation: string, observer: IntersectionObserver) =>
{
  element.classList.add(...animation.split(' '));
  observer.unobserve(element);
};

const animate = (): void =>
{
  const observer = new IntersectionObserver((entries) =>
  {
    entries.forEach((entry) =>
    {
      if(entry.isIntersecting)
      {
        const element = entry.target as HTMLElement;
        const animation = element.dataset.animate ?? '';

        animateElement(element, animation, observer);
      }
    });
  });

  const elements = document.querySelectorAll('[data-animate]');

  elements.forEach((element) =>
  {
    observer.observe(element);
  });
};

export { animate };