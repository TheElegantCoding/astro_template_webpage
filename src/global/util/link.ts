import { siteConfiguration } from '@global/configuration/site_configuration';
import { getLanguageFromUrl, addLanguageToPathname } from '@global/util/language';

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
  relationship?: string;
};

const removeLeadingSlash = (url: URL | string) => url.toString().replace(/^\/+/v, '');

const removeTrailingSlash = (url: URL | string) => url.toString().replace(/\/$/v, '');

const languageLink = (url: URL, link: LinkType) =>
{
  const languageHref = link;

  if(Object.keys(siteConfiguration.languages).length > 1)
  {
    const language = getLanguageFromUrl(url);

    languageHref.href = addLanguageToPathname(new URL(link.href), language);
  }

  return languageHref;
};

const validateExternalLink = (link: LinkType, href: URL | string, relationship?: string, target?: string) =>
{
  const linkReference = link;

  if(href.toString().includes('https'))
  {
    linkReference.rel = relationship;
    linkReference.target = target;

    if(!relationship)
    {
      linkReference.rel = 'noopenner noreferrer';
    }

    if(!target)
    {
      linkReference.target = '_blank';
    }
  }

  return linkReference;
};

const externalLink = ({
  href,
  relationship,
  site,
  target,
  url
}: ExternalLinkParameter): LinkType =>
{
  let link: LinkType = {
    href: removeTrailingSlash(new URL(href, site)),
    rel: undefined,
    target: undefined
  };

  link = validateExternalLink(link, href, relationship, target);

  link = languageLink(url, link);

  return link;
};

export {
  externalLink,
  removeLeadingSlash,
  removeTrailingSlash
};