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
  addLanguage?: boolean;
  relationship?: string;
};

const removeLeadingSlash = (url: URL | string) => url.toString().replace(/^\/+/v, '');

const removeTrailingSlash = (url: URL | string) => url.toString().replace(/\/$/v, '');

const languageLink = (url: URL, link: LinkType) => {
  const updatedLink = { ...link };

  if (Object.keys(siteConfiguration.languages).length > 1) {
    const language = getLanguageFromUrl(url);

    updatedLink.href = addLanguageToPathname(new URL(link.href, url.origin), language);
  }

  return updatedLink;
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
  addLanguage,
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

  if (addLanguage && !link.target) {
    link = languageLink(url, link);
  }

  return link;
};

export {
  externalLink,
  removeLeadingSlash,
  removeTrailingSlash
};