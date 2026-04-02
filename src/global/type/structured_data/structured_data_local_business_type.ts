import type { StructuredDataPostalAddressType } from '@global/type/structured_data/structured_data_postal_address_type';
import type { StructuredDataProductType } from '@global/type/structured_data/structured_data_product_type';
import type { StructuredDataReviewType, StructuredDataAggregateRatingType } from '@global/type/structured_data/structured_data_review_type';

type DayOfWeek =
  | 'Monday' | 'Friday' | 'Sunday' | 'Tuesday'
  | 'Thursday' | 'Saturday' | 'Wednesday';

type StructuredDataGeoCoordinatesType = {
  readonly latitude: number;
  readonly longitude: number;
  readonly '@type': 'GeoCoordinates';
};

type StructuredDataOpeningHoursSpecificationType = {
  readonly opens: string;
  readonly closes: string;
  readonly dayOfWeek: DayOfWeek[];
  readonly '@type': 'OpeningHoursSpecification';
};

type StructuredDataLocalBusinessType = {
  readonly url?: string;
  readonly name: string;
  readonly email?: string;
  readonly sameAs?: string[];
  readonly telephone: string;
  readonly priceRange: string;
  readonly image: string | string[];
  readonly '@type': 'LocalBusiness';
  readonly review?: StructuredDataReviewType;
  readonly geo?: StructuredDataGeoCoordinatesType;
  readonly products?: StructuredDataProductType[];
  readonly address: StructuredDataPostalAddressType;
  readonly aggregateRating?: StructuredDataAggregateRatingType;
  readonly openingHoursSpecification?: StructuredDataOpeningHoursSpecificationType[];
};

export type {
  StructuredDataLocalBusinessType,
  StructuredDataGeoCoordinatesType,
  StructuredDataOpeningHoursSpecificationType
};