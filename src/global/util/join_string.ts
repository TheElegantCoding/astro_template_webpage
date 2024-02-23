type StringType = null | string | boolean | undefined;

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

export { joinClass, joinString };