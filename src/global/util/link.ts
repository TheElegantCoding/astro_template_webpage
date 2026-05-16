type LinkType = {
  href: URL | string;
  rel: string | undefined;
  target: string | undefined;
};

type ExternalLinkParameter = {
  url: URL;
  target?: string;
  href: URL | string;
  site: URL | undefined;
  addLanguage?: boolean;
  relationship?: string;
};

const removeLeadingSlash = (url: URL | string) => {
  return url.toString().replace(/^\/+/v, '');
};

const removeTrailingSlash = (url: URL | string) => {
  return url.toString().replace(/\/$/v, '');
};

const validateExternalLink = (
  link: LinkType,
  href: URL | string,
  relationship?: string,
  target?: string
) => {
  const updatedLink = { ...link };
  const isExternal = href.toString().startsWith('http') || href.toString().startsWith('//');

  if (isExternal) {
    updatedLink.rel = relationship ?? 'noopener noreferrer';
    updatedLink.target = target ?? '_blank';
  }

  return updatedLink;
};

const externalLink = ({
  href,
  relationship,
  site,
  target,
  url
}: ExternalLinkParameter): LinkType => {
  const finalHref = removeTrailingSlash(new URL(href, site ?? url.origin));

  let link: LinkType = {
    href: finalHref,
    rel: undefined,
    target: undefined
  };

  link = validateExternalLink(
    link,
    href,
    relationship,
    target
  );

  return link;
};

export {
  externalLink,
  removeLeadingSlash,
  removeTrailingSlash
};