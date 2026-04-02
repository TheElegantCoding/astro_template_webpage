import type { StructuredDataReviewType, StructuredDataAggregateRatingType } from '@global/type/structured_data/structured_data_review_type';

type StructuredDataBrandType = {
  readonly name: string;
  readonly '@type': 'Brand';
};

type StructuredDataOfferType = {
  readonly price: number;
  readonly '@type': 'Offer';
  readonly priceCurrency: string;
  readonly priceValidUntil?: string;
  readonly availability?: StructuredDataItemAvailability;
};

type StructuredDataAggregateOffer = {
  readonly lowPrice: number;
  readonly highPrice?: number;
  readonly offerCount?: number;
  readonly priceCurrency: string;
  readonly '@type': 'AggregateOffer';
  readonly offers?: StructuredDataOfferType[];
};

type StructuredDataItemAvailability =
  'https://schema.org/InStock'
  | 'https://schema.org/PreSale'
  | 'https://schema.org/SoldOut'
  | 'https://schema.org/PreOrder'
  | 'https://schema.org/BackOrder'
  | 'https://schema.org/OnlineOnly'
  | 'https://schema.org/OutOfStock'
  | 'https://schema.org/InStoreOnly'
  | 'https://schema.org/Discontinued'
  | 'https://schema.org/LimitedAvailability';

type StructuredDataProductType = {
  readonly name: string;
  readonly '@type': 'Product';
  readonly description?: string;
  readonly image?: string | string[];
  readonly brand?: StructuredDataBrandType;
  readonly review?: StructuredDataReviewType;
  readonly availability?: StructuredDataItemAvailability;
  readonly aggregateRating?: StructuredDataAggregateRatingType;
  readonly offers?: StructuredDataOfferType | StructuredDataAggregateOffer;
};

export type {
  StructuredDataBrandType,
  StructuredDataOfferType,
  StructuredDataProductType,
  StructuredDataAggregateOffer
};