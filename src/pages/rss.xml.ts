import rss from '@astrojs/rss';
import { siteConfiguration } from '@global/configuration/site_configuration';

export const GET = async () => {
  return rss({
    description: siteConfiguration.description,
    items: [],
    site: import.meta.env.BASE_URL,
    title: siteConfiguration.siteName,
    customData: `<language>${siteConfiguration.defaultLanguage}</language>`,
    trailingSlash: false
  });
};