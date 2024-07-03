const momentumScroll = () =>
{
  const scrollContainer = document.querySelector<HTMLDivElement>('.scroll-momentum');

  let translateAmount = 0;
  let scrollPosition = 0;

  const smoothCount = 0.07;

  document.body.style.height = `${scrollContainer?.clientHeight}px`;

  const render = () =>
  {
    translateAmount += (scrollPosition - translateAmount) * smoothCount;

    if(scrollContainer)
    {
      scrollContainer.style.transform = `translateY(-${translateAmount}px)`;
    }

    window.requestAnimationFrame(render);
  };

  // eslint-disable-next-line github/prefer-observers
  window.addEventListener('scroll', () =>
  {
    scrollPosition = window.scrollY;
  });

  window.requestAnimationFrame(render);
};

export { momentumScroll };