type StructuredDataSearchAction = {
  target: string;
  'query-input': string;
  '@type': 'SearchAction';
};

type StructuredDataWebsiteType<T> = {
  url: string;
  name: string;
  mainEntity?: T[];
  '@type': 'WebSite';
  alternateName?: string[];
  potentialAction?: StructuredDataSearchAction;
};

export type {
  StructuredDataWebsiteType
};