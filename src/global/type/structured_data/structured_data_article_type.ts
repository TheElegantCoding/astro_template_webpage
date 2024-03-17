import type { StructuredDataOrganization } from '@global/type/structured_data/structured_data_organization_type';

type StructuredDataPersonType =
{
  url?: string;
  name: string;
  '@type': 'Person';
};

type StructuredDataArticleType =
{
  headline?: string;
  dateModified?: Date;
  datePublished?: Date;
  description?: string;
  image: string | string[];
  '@type': 'Article' | 'NewsArticle' | 'BlogPosting';
  author?: StructuredDataPersonType[] | StructuredDataOrganization[];
};

export type {
  StructuredDataPersonType,
  StructuredDataArticleType
};