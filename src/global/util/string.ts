type StringType = null | string | boolean | undefined;

const capitalizeFirst = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const joinString = (value: StringType[], join = ', '): string | undefined =>
{
  const validString = value.filter((element) => element !== ' ' &&
    element !== undefined &&
    element !== null &&
    element !== '' &&
    element !== false);

  const joinedString = validString.join(join);

  if(joinedString === '')
  {
    return undefined;
  }

  return joinedString;
};

const joinClass = (classes: StringType[]): string | undefined => joinString(classes, ' ');

const interpolate = (string_: string, parameters: Record<string, string>): string => string_.replaceAll(/{{(.*?)}}/g, (__, key: string) =>
{
  const trimmedKey = key.trim();

  return parameters[trimmedKey] ?? '';
});

export {
  joinClass,
  joinString,
  interpolate,
  capitalizeFirst
};