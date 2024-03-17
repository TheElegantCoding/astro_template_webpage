import type { StructuredDataReviewType, StructuredDataAggregateRatingType } from '@global/type/structured_data/structured_data_review_type';

type StructuredDataBrandType =
{
  name: string;
  '@type': 'Brand';
};

type StructuredDataOfferType =
{
  price: number;
  '@type': 'Offer';
  priceCurrency?: string;
  priceValidUntil?: Date;
};

type StructuredDataAggregateOffer =
{
  lowPrice: number;
  highPrice?: number;
  offerCount?: number;
  priceCurrency: string;
  '@type': 'AggregateOffer';
  offers?: StructuredDataOfferType[];
};

type StructuredDataItemAvailability =
  'https://schema.org/InStock' |
  'https://schema.org/PreSale' |
  'https://schema.org/SoldOut' |
  'https://schema.org/PreOrder' |
  'https://schema.org/BackOrder' |
  'https://schema.org/OnlineOnly' |
  'https://schema.org/OutOfStock' |
  'https://schema.org/InStoreOnly' |
  'https://schema.org/Discontinued' |
  'https://schema.org/LimitedAvailability';

type StructuredDataProductType =
{
  name: string;
  '@type': 'Product';
  description?: string;
  image?: string | string[];
  brand?: StructuredDataBrandType;
  review?: StructuredDataReviewType;
  availability?: StructuredDataItemAvailability;
  aggregateRating?: StructuredDataAggregateRatingType;
  offers?: StructuredDataOfferType | StructuredDataAggregateOffer;
};

export type {
  StructuredDataBrandType,
  StructuredDataOfferType,
  StructuredDataProductType,
  StructuredDataAggregateOffer
};