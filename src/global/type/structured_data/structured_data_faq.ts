type StructuredDataAnswerType =
{
  text: string;
  '@type': 'Answer';
};

type StructuredDataQuestionType =
{
  name: string;
  '@type': 'Question';
  acceptedAnswer: StructuredDataAnswerType;
};

type StructuredDataFaqType =
{
  '@type': 'FAQPage';
  mainEntity?: StructuredDataQuestionType[];
};

export type {
  StructuredDataFaqType,
  StructuredDataQuestionType
};