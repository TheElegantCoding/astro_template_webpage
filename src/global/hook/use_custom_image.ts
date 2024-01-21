import { useToggle } from '@global/hook/use_toggle';

import type { JSX, Accessor } from 'solid-js';

type UseCustomImageType =
{
  isSvg: boolean;
  source: string;
  handleToggle: () => void;
  toggle: Accessor<boolean>;
  handleError: (event: Event & { target: Element; currentTarget: HTMLImageElement }) => void;
};

const useCustomImage = (propertySource: () => string | undefined): UseCustomImageType =>
{
  const { handleToggle, toggle } = useToggle(false);
  const source = new URL(propertySource() ?? '', import.meta.url).href;
  const isSvg = source.includes('.svg');

  const handleError: JSX.EventHandlerUnion<HTMLImageElement, Event> = (event) =>
  {
    event.currentTarget.src = source;
  };

  return {
    handleError,
    handleToggle,
    isSvg,
    source,
    toggle
  };
};

export { useCustomImage };