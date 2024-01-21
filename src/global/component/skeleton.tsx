import { joinClass } from '@global/util/join_class';
import { splitProps } from 'solid-js';

import type { JSX, Component } from 'solid-js';

type SkeletonComponent = JSX.HTMLAttributes<HTMLDivElement> &
{
  isLoaded?: boolean;
  children?: JSX.Element;
};

const Skeleton: Component<SkeletonComponent> = (props): JSX.Element =>
{
  const [ local, rest ] = splitProps(props,
    [
      'class',
      'children',
      'isLoaded'
    ]);

  return (
    <div
      class={joinClass('skeleton', local.class, !local.isLoaded && 'skeleton--loading')}
      {...rest}
    >
      {local.children}
    </div>
  );
};

export { Skeleton };