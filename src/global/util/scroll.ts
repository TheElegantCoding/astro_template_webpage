import Lenis from 'lenis';

const smoothScroll = () =>
{
  const lenis = new Lenis();

  const raf = (time: number) =>
  {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
};

export { smoothScroll };