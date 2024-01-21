import { Skeleton } from '@global/component/skeleton';
import { useCustomImage } from '@global/hook/use_custom_image';
import { joinClass } from '@global/util/join_class';
import { replaceExtension } from '@global/util/replace_extension';
import { Show, mergeProps, splitProps } from 'solid-js';

import type { JSX, Component } from 'solid-js';

export type CustomImageComponent = JSX.ImgHTMLAttributes<HTMLImageElement> &
{
  readonly alt: string;
  readonly avif?: boolean;
  readonly webp?: boolean;
  readonly priority?: boolean;
  readonly dataAnimate?: string;
  readonly children?: JSX.Element;
  readonly disableLoader?: boolean;
  readonly classStyle?: Record<'skeleton' | 'container', string>;
};

const CustomImage: Component<CustomImageComponent> = (props) =>
{
  const merge = mergeProps({
    avif: true,
    disableLoader: false,
    webp: true
  }, props);
  const [ local ] = splitProps(merge, [
    'alt',
    'src',
    'priority',
    'avif',
    'webp',
    'class',
    'classStyle',
    'dataAnimate',
    'disableLoader'
  ]);

  const localSource = () => local.src;

  const {
    handleError,
    handleToggle,
    isSvg,
    source,
    toggle
  } = useCustomImage(localSource);

  return (
    <picture
      data-animate={local.dataAnimate}
      class={joinClass('custom-image', local.classStyle?.container)}
    >
      <Show when={!isSvg && local.avif}>
        <source
          type='image/avif'
          srcset={replaceExtension(source, 'avif')}
        />
      </Show>
      <Show when={!isSvg && local.webp}>
        <source
          type='image/webp'
          srcset={replaceExtension(source, 'webp')}
        />
      </Show>
      <Show when={!local.disableLoader}>
        <Skeleton
          isLoaded={toggle()}
          class={joinClass('custom-image__skeleton', local.classStyle?.skeleton)}
        />
      </Show>
      <img
        src={local.src}
        alt={local.alt}
        onLoad={handleToggle}
        onError={handleError}
        loading={local.priority ? 'eager' : 'lazy'}
        decoding={local.priority ? 'auto' : 'async'}
        fetchpriority={local.priority ? 'high' : 'auto'}
        class={joinClass('custom-image__tag',
          isSvg && 'custom-image__tag--illustration',
          local.class)}
      />
    </picture>
  );
};

export { CustomImage };