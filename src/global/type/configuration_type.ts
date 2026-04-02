import type { PwaDisplay, PwaFormFactor, PwaOrientation } from '@global/type/pwa_type';

type PwaConfigurationType = {
  siteName: string;
  shortName: string;
  themeColor: string;
  display?: PwaDisplay;
  backgroundColor: string;
  orientation?: PwaOrientation;
  icons: {
    src: string;
    type: string;
    sizes: string;
    purpose: string;
  }[];
  screenshots: {
    src: string;
    type: string;
    sizes: string;
    label: string;
    form_factor: PwaFormFactor;
  }[];
};

export type { PwaConfigurationType };