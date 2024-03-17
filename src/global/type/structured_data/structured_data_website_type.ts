type StructuredDataWebsiteType<T> =
{
  url: string;
  name: string;
  mainEntity?: T[];
  '@type': 'WebSite';
};

export type {
  StructuredDataWebsiteType
};