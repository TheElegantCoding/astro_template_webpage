import type { StructuredDataPostalAddressType } from '@global/type/structured_data/structured_data_postal_address_type';

type StructuredDataContactPoint = {
  readonly email: string;
  readonly telephone: string;
  readonly '@type': 'ContactPoint';
};

type StructuredDataQuantitativeValue = {
  readonly value?: number;
  readonly minValue?: number;
  readonly maxValue?: number;
  readonly '@type': 'QuantitativeValue';
};

type StructuredDataOrganization = {
  readonly url: string;
  readonly name: string;
  readonly duns?: string;
  readonly email?: string;
  readonly naics?: string;
  readonly vatID?: string;
  readonly leiCode?: string;
  readonly sameAs?: string[];
  readonly legalName?: string;
  readonly telephone?: string;
  readonly foundingData?: Date;
  readonly description: string;
  readonly iso6523Code?: string;
  readonly alternateName?: string;
  readonly logo: string | string[];
  readonly '@type': 'Organization';
  readonly globalLocationNumber?: string;
  readonly contactPoint?: StructuredDataContactPoint;
  readonly address?: StructuredDataPostalAddressType[];
  readonly numberOfEmployees?: StructuredDataQuantitativeValue;
};

export type {
  StructuredDataOrganization,
  StructuredDataContactPoint
};