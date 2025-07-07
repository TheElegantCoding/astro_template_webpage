import rss from '@astrojs/rss';
import { siteConfiguration } from '@global/configuration/site_configuration';

export const GET = () => rss({
  description: siteConfiguration.description,
  items: [],
  site: import.meta.env.BASE_URL,
  title: siteConfiguration.siteName,
  trailingSlash: false
});