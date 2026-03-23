import type { StructuredDataPostalAddressType } from '@global/type/structured_data/structured_data_postal_address_type';
import type { StructuredDataProductType } from '@global/type/structured_data/structured_data_product_type';
import type { StructuredDataReviewType, StructuredDataAggregateRatingType } from '@global/type/structured_data/structured_data_review_type';

type DayOfWeek =
  | 'Monday' | 'Friday' | 'Sunday' | 'Tuesday' |
  'Thursday' | 'Saturday' | 'Wednesday';

type StructuredDataGeoCoordinatesType = {
  latitude: number;
  longitude: number;
  '@type': 'GeoCoordinates';
};

type StructuredDataOpeningHoursSpecificationType = {
  opens: string;
  closes: string;
  dayOfWeek: DayOfWeek[];
  '@type': 'OpeningHoursSpecification';
};

type StructuredDataLocalBusinessType = {
  url?: string;
  name: string;
  email?: string;
  sameAs?: string[];
  telephone: string;
  priceRange: string;
  image: string | string[];
  '@type': 'LocalBusiness';
  review?: StructuredDataReviewType;
  geo?: StructuredDataGeoCoordinatesType;
  products?: StructuredDataProductType[];
  address: StructuredDataPostalAddressType;
  aggregateRating?: StructuredDataAggregateRatingType;
  openingHoursSpecification?: StructuredDataOpeningHoursSpecificationType[];
};

export type {
  StructuredDataLocalBusinessType,
  StructuredDataGeoCoordinatesType,
  StructuredDataOpeningHoursSpecificationType
};