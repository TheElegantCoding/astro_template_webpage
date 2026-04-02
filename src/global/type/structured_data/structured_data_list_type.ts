type StructuredDataListItemType = {
  readonly name: string;
  readonly position: number;
  readonly '@type': 'ListItem';
};

type StructuredDataItemListType = {
  readonly '@type': 'ItemList';
  readonly itemListElement: StructuredDataListItemType[];
};

export type {
  StructuredDataItemListType,
  StructuredDataListItemType
};