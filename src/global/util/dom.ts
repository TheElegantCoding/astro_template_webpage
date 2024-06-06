const domFind = <T extends HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document
) => context.querySelector<T>(selector);

const domFindAll = <T extends HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document
) => context.querySelectorAll<T>(selector);

export { domFind, domFindAll };