import { siteConfiguration } from '@global/configuration/site_configuration';

const { defaultLanguage, languages } = siteConfiguration;

type LanguageParameters =
{
  params: Record<string, string>;
};

type JsonLanguage =
{
  default: Record<string, string>;
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

const getLanguageFromUrl = (url: URL): string =>
{
  const urlLang = url.pathname.split('/')[1];

  if(urlLang && urlLang in languages)
  {
    return urlLang;
  }

  return defaultLanguage;
};

const getLanguagePathname = (url: URL) =>
{
  let { pathname } = url;

  const urlLength = pathname.split('/').length;

  const languagePrefixes = Object.keys(languages);
  const hasLanguagePrefix = languagePrefixes.some((prefix) => pathname.includes(prefix));
  const languagePosition = 2;

  if(hasLanguagePrefix)
  {
    pathname = pathname.replace(`/${languagePrefixes.join('|')}`, '');
  }

  if(urlLength > languagePosition)
  {
    return pathname.slice(1);
  }

  return pathname;
};

const getI18n = async (json: string, jsonModule: string, currentLocale: string = defaultLanguage) =>
{
  let jsonLanguage;

  if(jsonModule === 'global')
  {
    jsonLanguage = await import(`./../../../global/locale/${currentLocale}/${currentLocale}_${json}.json`) as JsonLanguage;
  }

  jsonLanguage = await import(`./../../module/${jsonModule}/locale/${currentLocale}/${currentLocale}_${json}.json`) as JsonLanguage;

  return jsonLanguage.default;
};

export {
  getI18n,
  getStaticLanguage,
  getLanguageFromUrl,
  getLanguagePathname
};