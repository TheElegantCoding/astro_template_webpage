type StructuredDataAnswerType = {
  readonly text: string;
  readonly '@type': 'Answer';
};

type StructuredDataQuestionType = {
  readonly name: string;
  readonly '@type': 'Question';
  readonly acceptedAnswer: StructuredDataAnswerType;
};

type StructuredDataFaqType = {
  readonly '@type': 'FAQPage';
  readonly mainEntity: StructuredDataQuestionType[];
};

export type {
  StructuredDataFaqType,
  StructuredDataQuestionType
};