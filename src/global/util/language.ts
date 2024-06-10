/* eslint-disable security/detect-non-literal-regexp */
import { siteConfiguration } from '@global/configuration/site_configuration';
import { removeLeadingSlash, removeTrailingSlash } from '@global/util/link';

const { defaultLanguage, languages } = siteConfiguration;

type LanguageParameters =
{
  params: Record<string, string>;
};

type LanguageType = keyof typeof languages;

const getLanguageFromUrl = (url: URL): LanguageType =>
{
  const urlLang = url.pathname.split('/')[1];

  if(urlLang && urlLang in languages)
  {
    return urlLang as LanguageType;
  }

  return defaultLanguage as LanguageType;
};

const getStaticLanguage = () =>
{
  const language: LanguageParameters[] = [];

  Object.keys(languages).forEach((key) =>
  {
    if(key !== defaultLanguage)
    {
      language.push({ params: { language: key } });
    }
  });

  return language;
};

const getLanguagePathname = (url: URL) =>
{
  let { pathname } = url;

  const languagePrefixes = Object.keys(languages);
  const hasLanguagePrefix = languagePrefixes.some((prefix) => pathname.includes(prefix));

  if(hasLanguagePrefix)
  {
    pathname = pathname.replace(new RegExp(`/(${languagePrefixes.join('|')})`, 'u'), '');
    pathname = removeLeadingSlash(pathname);

    return `/${pathname}`;
  }

  return pathname;
};

const addLanguageToPathname = (url: URL, language: LanguageType) =>
{
  const { pathname } = url;

  if(language !== defaultLanguage)
  {
    return removeTrailingSlash(`/${language}${pathname}`);
  }

  return pathname;
};

const getI18n = <T>(language: LanguageType, languageModule: Record<string, T>): T => languageModule[language] as T;

export {
  getI18n,
  getStaticLanguage,
  getLanguageFromUrl,
  getLanguagePathname,
  addLanguageToPathname
};