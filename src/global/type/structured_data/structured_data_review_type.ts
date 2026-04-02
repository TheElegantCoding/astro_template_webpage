import type { StructuredDataItemListType } from '@global/type/structured_data/structured_data_list_type';

type StructuredDataItemReviewedType = {
  readonly name: string;
  readonly '@type': 'Review' | 'Product' | 'Organization' | 'CreativeWork' | 'LocalBusiness';
};

type StructuredDataRatingType = {
  readonly '@type': 'Rating';
  readonly bestRating: number;
  readonly ratingValue: number;
  readonly worstRating: number;
};

type StructuredDataReviewType = {
  readonly name?: string;
  readonly '@type': 'Review';
  readonly reviewBody?: string;
  readonly datePublished?: string;
  readonly reviewRating?: StructuredDataRatingType;
  readonly positiveNotes?: StructuredDataItemListType;
  readonly negativeNotes?: StructuredDataItemListType;
  readonly itemReviewed?: StructuredDataItemReviewedType;
  readonly author?: {
    readonly name: string;
    readonly '@type': 'Person' | 'Organization';
  };
};

type StructuredDataAggregateRatingType = {
  readonly bestRating?: number;
  readonly ratingValue: number;
  readonly ratingCount: number;
  readonly worstRating?: number;
  readonly '@type': 'AggregateRating';
};

export type {
  StructuredDataRatingType,
  StructuredDataReviewType,
  StructuredDataItemListType,
  StructuredDataAggregateRatingType
};