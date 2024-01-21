import { useSignal } from '@global/hook/use_signal';

import type { Setter, Accessor } from 'solid-js';

type UseToggleType =
{
  handleToggle: () => void;
  toggle: Accessor<boolean>;
  setToggle: Setter<boolean>;
};

const useToggle = (defaultValue = false): UseToggleType =>
{
  const [ toggle, setToggle ] = useSignal<boolean>(defaultValue);

  const handleToggle = (): void =>
  {
    setToggle(!toggle());
  };

  return {
    handleToggle,
    setToggle,
    toggle
  };
};

export { useToggle };