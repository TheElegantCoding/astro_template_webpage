type FilterImageChild =
{
  children: HTMLElement[];
  image: HTMLImageElement;
};

const animateElement = (element: HTMLElement, animation: string, observer: IntersectionObserver) =>
{
  element.classList.add(...animation.split(' '));
  observer.unobserve(element);
};

const animateImageOnLoad = (
  animation: string,
  image: HTMLImageElement,
  observer: IntersectionObserver,
  filterImageChild: FilterImageChild[]
) =>
{
  const pictureContent = image.parentNode?.querySelector('.custom-image__content');
  const children = pictureContent?.querySelectorAll<HTMLElement>('[data-animate]');

  if(children)
  {
    filterImageChild.push({
      children: [ ...children ],
      image
    });
  }

  if(image.complete)
  {
    animateElement(image, animation, observer);
  }
  else
  {
    image.addEventListener('load', () =>
    {
      animateElement(image, animation, observer);
    });
  }
};

const animate = (): void =>
{
  const observer = new IntersectionObserver((entries) =>
  {
    const imageChildren: FilterImageChild[] = [];

    entries.forEach((entry) =>
    {
      if(entry.isIntersecting)
      {
        const element = entry.target as HTMLElement;
        const animation = element.dataset.animate ?? '';

        if(element instanceof HTMLImageElement)
        {
          animateImageOnLoad(animation, element, observer, imageChildren);

          return;
        }

        imageChildren.forEach((filter) =>
        {
          if(filter.children.some((node) => node.isEqualNode(element)) && filter.image.complete)
          {
            element.classList.add(...animation.split(' '));
          }
        });

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