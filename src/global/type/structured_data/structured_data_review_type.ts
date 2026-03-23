import type { StructuredDataItemListType } from '@global/type/structured_data/structured_data_list_type';

type StructuredDataItemReviewedType = {
  name: string;
  '@type': 'Review' | 'Product' | 'Organization' | 'CreativeWork' | 'LocalBusiness';
};

type StructuredDataRatingType = {
  '@type': 'Rating';
  bestRating: number;
  ratingValue: number;
  worstRating: number;
};

type StructuredDataReviewType = {
  name?: string;
  '@type': 'Review';
  reviewBody?: string;
  datePublished?: string;
  reviewRating?: StructuredDataRatingType;
  positiveNotes?: StructuredDataItemListType;
  negativeNotes?: StructuredDataItemListType;
  itemReviewed?: StructuredDataItemReviewedType;
  author?: {
    name: string;
    '@type': 'Person' | 'Organization';
  };
};

type StructuredDataAggregateRatingType = {
  bestRating?: number;
  ratingValue: number;
  ratingCount: number;
  worstRating?: number;
  '@type': 'AggregateRating';
};

export type {
  StructuredDataRatingType,
  StructuredDataReviewType,
  StructuredDataItemListType,
  StructuredDataAggregateRatingType
};