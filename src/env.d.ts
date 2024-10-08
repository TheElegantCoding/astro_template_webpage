/// <reference path="../.astro/types.d.ts" />
type ImportMetaEnv =
{
  readonly PORT: number;
  readonly BASE_URL: string;
  readonly MODE: 'staging' | 'production' | 'development';
};

interface ImportMeta
{
  readonly env: ImportMetaEnv;
}