import type { StructuredDataPostalAddressType } from '@global/type/structured_data/structured_data_postal_address_type';

type StructuredDataContactPoint =
{
  email: string;
  telephone: string;
  '@type': 'ContactPoint';
};

type StructuredDataQuantitativeValue =
{
  value?: number;
  minValue?: number;
  maxValue?: number;
  '@type': 'QuantitativeValue';
};

type StructuredDataOrganization =
{
  url?: string;
  name?: string;
  duns?: string;
  email?: string;
  naics?: string;
  vatID?: string;
  leiCode?: string;
  sameAs?: string[];
  legalName?: string;
  telephone?: string;
  foundingData?: Date;
  description?: string;
  iso6523Code?: string;
  alternateName?: string;
  logo: string | string[];
  '@type': 'Organization';
  globalLocationNumber?: string;
  contactPoint?: StructuredDataContactPoint;
  address?: StructuredDataPostalAddressType[];
  numberOfEmployees?: StructuredDataQuantitativeValue;
};

export type {
  StructuredDataOrganization,
  StructuredDataContactPoint
};