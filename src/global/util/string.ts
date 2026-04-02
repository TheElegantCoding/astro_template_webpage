type StringType = null | string | boolean | undefined;

const capitalizeFirst = (word: string): string =>
  (word ? word.charAt(0).toUpperCase() + word.slice(1) : '');

const joinString = (value: StringType[], separator = ', '): string | undefined => {
  const validStrings = value.filter((element): element is string =>
    typeof element === 'string' && element.trim() !== '');

  return validStrings.length > 0 ? validStrings.join(separator) : undefined;
};

const joinClass = (classes: StringType[]): string | undefined => joinString(classes, ' ');

export {
  joinClass,
  joinString,
  capitalizeFirst
};