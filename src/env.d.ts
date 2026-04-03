/// <reference path="../.astro/types.d.ts" />
/// <reference types="vite-pwa/info" />
/// <reference types="vite-pwa/client" />

type ImportMetaEnv = {
  readonly PORT: number;
  readonly BASE_URL: string;
};

declare module 'virtual:pwa-info' {
  export const pwaInfo: undefined | {
    webManifest: {
      href: string;
      linkTag: string;
    };
  };
}

declare module 'virtual:pwa-register' {
  type RegisterSWOptions = {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    onRegisterError?: (error: any) => void;
    onRegistered?: (registration: undefined | ServiceWorkerRegistration) => void;
  };

  function registerSW (options?: RegisterSWOptions): (reloadPage?: boolean) => Promise<void>;

  export {
    registerSW,
    RegisterSWOptions
  };
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}