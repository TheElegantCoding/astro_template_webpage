/* eslint-disable style/max-len */
/* eslint-disable max-statements */
import { siteConfiguration } from '@global/configuration/site_configuration';
import {
  type LanguageType, getLanguageFromUrl, getLanguagePathname, addLanguageToPathname,
  validateDefaultLanguage
} from '@global/util/language';
import { defineMiddleware } from 'astro/middleware';

const { defaultLanguage, languages } = siteConfiguration;

const onRequest = defineMiddleware(async (context, next) =>
{
  const currentLanguage = getLanguageFromUrl(context.url);

  if(!context.cookies.get('language'))
  {
    const headerLanguage = new Request(context.request).headers.get('Accept-Language')?.split(',');
    const preferredLanguage: string[] = [];

    let browserLanguage: LanguageType = defaultLanguage as LanguageType;

    if(headerLanguage)
    {
      headerLanguage.forEach((element) =>
      {
        if((/;q=.*/v).test(element))
        {
          preferredLanguage.push(element.replaceAll(/;q=.*/gv, ''));

          return;
        }

        preferredLanguage.push(element);
      });
    }

    browserLanguage = (preferredLanguage.find((language) => language && language in languages) ?? defaultLanguage) as LanguageType;

    const currentDate = new Date();

    currentDate.setFullYear(currentDate.getFullYear() + 1);
    context.cookies.set('language', browserLanguage, { expires: currentDate });

    if(currentLanguage !== browserLanguage)
    {
      const oldPathname = getLanguagePathname(context.url);
      const pathname = addLanguageToPathname(new URL(oldPathname, context.url), browserLanguage);
      const redirectCode = 302;

      return Response.redirect(new URL(pathname, context.url), redirectCode);
    }
  }

  if(validateDefaultLanguage(context.url))
  {
    const pathname = getLanguagePathname(context.url);
    const redirectCode = 302;

    return Response.redirect(new URL(pathname, context.url), redirectCode);
  }

  return next();
});

export { onRequest };