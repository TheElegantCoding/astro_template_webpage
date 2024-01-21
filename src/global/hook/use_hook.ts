import {
  $, type QRL, useSignal, type Signal
} from '@builder.io/qwik';

type UseToggleType =
{
  toggle: Signal<boolean>;
  handleToggle: QRL<() => void>;
};

const useToggle = (defaultValue = false): UseToggleType =>
{
  const toggle = useSignal<boolean>(defaultValue);

  const handleToggle = $((): void =>
  {
    toggle.value = !toggle.value;
  });

  return {
    handleToggle,
    toggle
  };
};

export { useToggle };