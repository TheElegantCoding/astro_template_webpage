import { siteConfiguration } from '@global/configuration/site_configuration';
import { removeTrailingSlash } from '@global/util/link';

const { defaultLanguage, languages } = siteConfiguration;

type LanguageParameters = {
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

const validateLanguage = (language: string): LanguageType =>
{
  if(language in languages)
  {
    return language as LanguageType;
  }

  return defaultLanguage as LanguageType;
};

const getStaticLanguage = () =>
{
  const language: LanguageParameters[] = [];

  Object.keys(languages).forEach((key) =>
  {
    language.push({ params: { language: key } });
  });

  return language;
};

const getLanguagePathname = (url: URL) =>
{
  const modifiedUrl = url;

  const languagePrefixes = Object.keys(languages);
  const hasLanguagePrefix = languagePrefixes.some((prefix) => modifiedUrl.pathname.includes(prefix));

  if(hasLanguagePrefix)
  {
    modifiedUrl.pathname = modifiedUrl.pathname.replace(new RegExp(`/(${languagePrefixes.join('|')})`, 'u'), '');

    return modifiedUrl.pathname;
  }

  return modifiedUrl.pathname;
};

const addLanguageToPathname = (url: URL, language: LanguageType) =>
{
  const modifiedUrl = url;

  if(language !== defaultLanguage)
  {
    modifiedUrl.pathname = `/${language}${modifiedUrl.pathname}`;

    if(modifiedUrl.hash)
    {
      modifiedUrl.href = modifiedUrl.href.replaceAll(`/${modifiedUrl.hash}`, modifiedUrl.hash);
    }
  }

  return removeTrailingSlash(modifiedUrl);
};

const validateDefaultLanguage = (url: URL) =>
{
  const urlLang = url.pathname.split('/')[1];

  return urlLang === defaultLanguage;
};

const getI18n = <T>(language: LanguageType, languageModule: Record<string, T>): T => languageModule[language] as T;

export {
  getI18n,
  validateLanguage,
  getStaticLanguage,
  getLanguageFromUrl,
  getLanguagePathname,
  addLanguageToPathname,
  validateDefaultLanguage
};

export type {
  LanguageType
};