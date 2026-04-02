type StringType = null | string | boolean | undefined;

const capitalizeFirst = (word: string): string => {
  const result = word ? word.charAt(0).toUpperCase() + word.slice(1) : '';
  return result;
};

const joinString = (value: StringType[], separator = ', '): string | undefined => {
  const validStrings = value.filter((element): element is string => { return typeof element === 'string' && element.trim() !== ''; });

  return validStrings.length > 0 ? validStrings.join(separator) : undefined;
};

const joinClass = (classes: StringType[]): string | undefined => { return joinString(classes, ' '); };

export {
  joinClass,
  joinString,
  capitalizeFirst
};