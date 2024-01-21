import { Slot, component$ } from '@builder.io/qwik';
import { joinClass } from '@global/util/join_class';

type SkeletonComponent =
{
  readonly class?: string;
  readonly isLoaded?: boolean;
};

const Skeleton = component$<SkeletonComponent>(({ class: classSkeleton, isLoaded }) => (
  <div
    class={joinClass('skeleton', !isLoaded && 'skeleton--active', classSkeleton)}
  >
    <Slot />
  </div>
));

export { Skeleton };