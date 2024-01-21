import { Slot, component$ } from '@builder.io/qwik';

type ShowComponent =
{
  readonly when: null | string | boolean | undefined;
};

const Show = component$<ShowComponent>(({ when }) => when && <Slot />);

export { Show };