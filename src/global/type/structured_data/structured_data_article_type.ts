import type { StructuredDataOrganization } from '@global/type/structured_data/structured_data_organization_type';

type StructuredDataPersonType = {
  readonly url?: string;
  readonly name: string;
  readonly '@type': 'Person';
};

type StructuredDataArticleType = {
  readonly headline?: string;
  readonly description?: string;
  readonly dateModified?: string;
  readonly datePublished?: string;
  readonly image: string | string[];
  readonly '@type': 'Article' | 'NewsArticle' | 'BlogPosting';
  readonly author?: StructuredDataPersonType[] | StructuredDataOrganization[];
};

export type {
  StructuredDataPersonType,
  StructuredDataArticleType
};