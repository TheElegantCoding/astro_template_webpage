type PwaDisplay = 'browser' | 'fullscreen' | 'standalone' | 'minimal-ui';

type PwaOrientation =
  'any'
  | 'natural'
  | undefined
  | 'portrait'
  | 'landscape'
  | 'portrait-primary'
  | 'landscape-primary'
  | 'portrait-secondary'
  | 'landscape-secondary';

type PwaFormFactor = 'wide' | 'narrow' | undefined;

export type { PwaDisplay, PwaFormFactor, PwaOrientation };