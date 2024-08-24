import type { MetaDataProps } from '@global/component/meta_data.astro';
import type { StructuredDataProps } from '@global/type/structured_data/structured_data_props';

type BaseLayoutProps<T> =
{
  readonly metaData?: MetaDataProps;
  readonly structuredData?: StructuredDataProps<T>;
};

export type { BaseLayoutProps };