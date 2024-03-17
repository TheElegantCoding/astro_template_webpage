type StructuredDataListItemType =
{
  name: string;
  position: number;
  '@type': 'ListItem';
};

type StructuredDataItemListType =
{
  '@type': 'ItemList';
  itemListElement: StructuredDataListItemType[];
};

export type {
  StructuredDataItemListType,
  StructuredDataListItemType
};