import rss from '@astrojs/rss';
import { siteConfiguration } from '@global/configuration/site_configuration';

export const GET = async () => rss({
  description: siteConfiguration.description,
  items: [],
  site: import.meta.env.SITE,
  title: siteConfiguration.siteName,
  trailingSlash: false
});