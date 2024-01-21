import { $, component$ } from '@builder.io/qwik';
import { Show } from '@global/component/show';
import { Skeleton } from '@global/component/skeleton';
import { useToggle } from '@global/hook/use_hook';
import { replaceExtension } from '@global/util/replace_extension';

import type { PropsOf } from '@builder.io/qwik';

type CustomImageComponent = PropsOf<'img'> &
{
  readonly src: string;
  readonly alt: string;
  readonly webp?: boolean;
  readonly avif?: boolean;
  readonly class?: string;
  readonly priority?: boolean;
  readonly disableLoader?: boolean;
  readonly classStyle?: Partial<Record<'skeleton' | 'container', string>>;
};

const CustomImage = component$<CustomImageComponent>(({
  alt,
  avif,
  disableLoader,
  priority,
  src: source,
  webp
}) =>
{
  const { handleToggle, toggle } = useToggle();

  const handleError = $((_event: ErrorEvent, element: HTMLImageElement) =>
  {
    const imageElement = element;

    imageElement.src = source;
  });

  return (
    <picture
      class='custom-image'
    >
      <Show when={webp}>
        <source
          type='image/webp'
          srcset={replaceExtension(source, 'webp')}
        />
      </Show>
      <Show when={avif}>
        <source
          type='image/avif'
          srcset={replaceExtension(source, 'avif')}
        />
      </Show>
      <Show when={!disableLoader}>
        <Skeleton
          isLoaded={toggle.value}
          class='custom-image__skeleton'
        />
      </Show>
      <img
        alt={alt}
        src={source}
        onError$={handleError}
        onLoad$={handleToggle}
        class='custom-image__tag'
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'auto' : 'async'}
        // fetchpriority={priority ? 'high' : 'auto'}
      />
    </picture>
  );
});

export { CustomImage };