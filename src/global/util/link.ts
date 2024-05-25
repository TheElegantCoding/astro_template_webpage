type LinkType =
{
  href: URL | string;
  rel: string | undefined;
  target: string | undefined;
};

const removeTrailingSlash = (url: URL | string) => url.toString().replace(/\/$/v, '');

const externalLink = (href: URL | string, site: URL | undefined, relationship?: string, target?: string): LinkType =>
{
  const link: LinkType =
  {
    href: removeTrailingSlash(new URL(href, site)),
    rel: undefined,
    target: undefined
  };

  if(href.toString().includes('https'))
  {
    link.href = href;
    link.rel = relationship;
    link.target = target;

    if(!relationship)
    {
      link.rel = 'noopenner noreferrer';
    }

    if(!target)
    {
      link.target = '_blank';
    }
  }

  return link;
};

export { externalLink, removeTrailingSlash };