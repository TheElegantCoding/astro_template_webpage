type ClassType = null | string | boolean | undefined;

const joinClass = (...classes: ClassType[]): string | undefined =>
{
  let arrayClasses = classes;

  arrayClasses = arrayClasses.filter((classElement) => classElement !== ' ' &&
    classElement !== undefined &&
    classElement !== null &&
    classElement !== '' &&
    classElement !== false);

  const joinClasses = arrayClasses.join(' ');

  if(joinClasses === '')
  {
    return undefined;
  }

  return joinClasses;
};

export { joinClass };