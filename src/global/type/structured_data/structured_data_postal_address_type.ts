type StructuredDataPostalAddressType = {
  readonly postalCode: string;
  readonly addressRegion: string;
  readonly streetAddress: string;
  readonly addressCountry: string;
  readonly addressLocality: string;
  readonly '@type': 'PostalAddress';
};

export type {
  StructuredDataPostalAddressType
};