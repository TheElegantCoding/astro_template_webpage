import Lenis from 'lenis';

const smoothScroll = () =>
{
  const lenis = new Lenis({
    duration: 1,
    smoothWheel: true,
  });

  const raf = (time: number) =>
  {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  return lenis;
};

export { smoothScroll };