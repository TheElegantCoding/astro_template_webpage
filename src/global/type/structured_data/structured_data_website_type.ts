type StructuredDataSearchAction = {
  readonly target: string;
  readonly 'query-input': string;
  readonly '@type': 'SearchAction';
};

type StructuredDataWebsiteType<T> = {
  readonly url: string;
  readonly name: string;
  readonly mainEntity?: T[];
  readonly '@type': 'WebSite';
  readonly alternateName?: string[];
  readonly potentialAction?: StructuredDataSearchAction;
};

export type {
  StructuredDataWebsiteType
};