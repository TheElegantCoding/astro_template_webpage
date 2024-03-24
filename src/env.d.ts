/// <reference types="astro/client" />

type ImportMetaEnv =
{
  readonly PORT: number;
  readonly BASE_URL: string;
};

type ImportMeta =
{
  readonly env: ImportMetaEnv;
};