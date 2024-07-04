<img src="./asset/illustration/wave_header.svg" alt="wave" width="100%" align="center"/>

<h1 id="astro-template-webpage">
  <img src="./asset/icon/web.svg" width="32px" align="center" />
  Astro template webpage
</h1>

---

<pre align="center">
  <a href="#instalation">📦 SETUP</a> • <a href="#configuration">⚙️ CONFIGURATION</a> • <a href="#features">️️️🛰️ FEATURES</a>
</pre>

---

<img src="./asset/illustration/cover.svg" alt="cover" width="100%" align="center" />

<br />

<div align="center">
  <img src="./asset/badget/astro_badget.svg" height="32px" />&nbsp;&nbsp;&nbsp;
  <img src="./asset/badget/eslint_badget.svg" height="32px" />&nbsp;&nbsp;&nbsp;
  <img src="./asset/badget/stylelint_badget.svg" height="32px" />&nbsp;&nbsp;&nbsp;
  <img src="./asset/badget/bun_badget.svg" height="32px" />&nbsp;&nbsp;&nbsp;
  <img src="./asset/badget/github_badget.svg" height="32px" />
</div>

---

<h2 id="about">
  <img src="./asset/icon/information.svg" width="24px" align="center"/>
  About
</h2>

<table border>
<tr>
<td>

Tired of sluggish websites and SEO headaches? Unleash the power of lightning-fast performance and built-in optimization with this Astro template builder! Crafted for developers who value speed and simplicity, this robust toolkit empowers you to build stunning websites that soar in search engines and captivate users.

Ditch the struggle and focus on what matters most - crafting impactful content that drives engagement. Welcome to the future of web development - where SEO and performance work hand-in-hand.

<p align="right">
  ( <a href="#astro-template-webpage">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>
</td>
</tr>
</table>

---

<h2>
  <img src="./asset/icon/book.svg" width="24px" align="center"/>
  Table of content
</h2>

- [<img src="./asset/icon/information.svg" width="20px" align="center" /> About](#about)
- [<img src="./asset/icon/satellite.svg" width="20px" align="center" /> Features](#features)
- [<img src="./asset/icon/thunder.svg" width="20px" align="center" /> Requirements](#requirements)
- [<img src="./asset/icon/package.svg" width="20px" align="center" /> Installation](#installation)
- [<img src="./asset/icon/gear.svg" width="20px" align="center" /> Configuration](#configuration)
  - [Site configuration](#site-configuration)
  - [Environment varaibles](#enviroment-varaible)
  - [i18n configuration](#i18n-configuration)
- [<img src="./asset/icon/rocket.svg" width="20px" align="center" /> Usage](#usage)
- [<img src="./asset/icon/terminal.svg" width="20px" align="center" /> Scripts](#scripts)
- [<img src="./asset/icon/world.svg" width="20px" align="center" /> Browser support](#browser-support)

<p align="right">
  ( <a href="#astro-template-webpage">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<h2 id="features">
  <img src="./asset/icon/satellite.svg" width="24px" align="center" />
  Features
</h2>

- <img src="./asset/icon/astro.svg" width="24px" align="center" /> `Astro` - Astro Framework
- <img src="./asset/icon/typescript.svg" width="24px" align="center" /> `Typescript` - Extremely strict type checking
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Absolute imports` -  No more bad imports
- <img src="./asset/icon/sass.svg" width="24px" align="center" /> `Sass` - Css framework for ui development
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `BEMIT` - Arquitecture for sass
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Mobile firts` - Best performance for css
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Reset` - Reset css for match style between browsers
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Join media queries` - Join media queries for small file size
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Vendor prefixes` - Vendor prefixes for all support
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Remove unused css` - Remove unused css in build
- <img src="./asset/icon/construction.svg" width="24px" align="center" /> `Clean arquitecture` - For clean code and scalablility
- <img src="./asset/icon/world_full.svg" width="24px" align="center" /> `SEO` - SEO meta data, open graph and more
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Sitemap` - Sitemap generator
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `RSS` - RSS generator
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Open graph` - Advanced open graph SEO
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Robot` - Robot txt configuration
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Canonical` - Auto canonical url
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Google search console` - For SEO stadistics
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Google analytic` - For analytics of the webpage
- <img src="./asset/icon/language.svg" width="24px" align="center" /> `i18n` - Internationalization and translations
- <img src="./asset/icon/rule.svg" width="24px" align="center" /> `Linter` - Linter and formatting all kind of files
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Eslint` - Litner and formatting ts and js files
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Stylelint` - Linter css files
- <img src="./asset/icon/git.svg" width="24px" align="center" /> `Git` - Control version and more
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Github issue template` - Github issues organization
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Githooks` - Git hook for validate code quality
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Changelog` - Changelog and realese for github
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Sematic release` - Automatization of releases
- <img src="./asset/icon/gear_full.svg" width="24px" align="center" /> `Configuration` - Vscode, env variables and more
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Vscode configuration` - Vscode recommendations, extensions and more
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Env validation` - Enviroment variables validation
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Htaccess snipets` - Differents htaccess for all kind of situations
- <img src="./asset/icon/plugin.svg" width="24px" align="center" /> `Components`
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Image` - Ready to use optimize image component
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Show` - Ready to use conditional render component
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `For` - Ready to use for map components
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Link` - Ready to use for redirect external and internal links
- <img src="./asset/icon/thunder_full.svg" width="24px" align="center" /> `Performance`
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Web worker (partytown)` - For lazy-loaded large libraries
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Bundler analizer` - Analize your bundle size
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Compress` - Compress images, font, css, js, and html
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Non blocking` - Non blocking js, css and more
  - <img src="./asset/icon/check.svg" width="20px" align="center" /> `Font optimization` - Font transformation and declaration
- <img src="./asset/icon/bun.svg" width="24px" align="center" /> `Bun` - Fast package manager
- <img src="./asset/icon/lighthouse.svg" width="24px" align="center" /> `Perfect lighthouse score` - Because performance matters

<p align="right">
  ( <a href="#astro-template-webpage">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<h2 id="requirements">
  <img src="./asset/icon/thunder.svg" width="24px" align="center" />
  Requirements
</h2>

- <img src="./asset/icon/node.svg" width="20px" align="center" /> node >= **20.10.0**
- <img src="./asset/icon/git.svg" width="20px" align="center" /> git >= **2.38**
- <img src="./asset/icon/bun.svg" width="20px" align="center" /> bun >= **1.1.0**
- <img src="./asset/icon/aws.svg" width="20px" align="center" /> aws cli >= **2.17.8**

<p align="right">
  ( <a href="#astro-template-webpage">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<h2 id="installation">
  <img src="./asset/icon/package.svg" width="20px" align="center" />
  Installation
</h2>

After cloning the repo run this command to install all the dependencies.

<h3><img src="./asset/icon/bun.svg" width="24px" align="center" /> Bun</h3>

```bash
bun i
```

<p align="right">
  ( <a href="#astro-template-webpage">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<h2 id="configuration">
  <img src="./asset/icon/gear.svg" width="24px" align="center" />
  Configuration
</h2>

The configuration needed for this project is to set up the env variables and also the site configuration object here are the examples:

<h3 id="site-configuration">Site configuration</h3>

This file is located in `src/global/configuration/site_configuration.ts`

- `siteName` - Global title of the webpage
- `description` - Global description of the webpage
- `autor` - Author object that appears in a meta tag
  - `author.name` - Name of the author
  - `author.email` - Email of the author
  - `author.web` - Web of the author
- `copyright` - Copyright of the owner of the website
- `googleAnalyticId` - Id of the google analytics
- `defaultLocale` - Default locale of the webpage
- `languages` - Object with all the languages you want to support
  - `example` - `languages: { en: 'English' }`

<h3 id="environment-varaible">Evironment varaibles</h3>

This environment variables are located in `src/global/env/**.env`

file: **.example.dev.env**

```yml
PORT=4321
BASE_URL=http://localhost:$PORT
```

file: **.example.prod.env**

```yml
BASE_URL=
```

file: **.example.staging.env**

```yml
PORT=4321
BASE_URL=http://localhost:$PORT
```

<h3 id="i18n-configuration">i18n configuration</h3>

1.- To start using i18n in this project you have to add the languages you want to support in the configuration file `src/global/configuration/site_configuration.ts`, here you will find an object with the key `languages`, also remenber to ser the default language to your preferences, you can set the languages like this:

```ts
const siteConfiguration =
{
  defaultLanguage: 'en',
  languages:
  {
    en: 'English',
    es: 'Español'
  }
}
```

2.- Next you will create in the `src/pages` a directory called `[language]`, here you will duplicate and put all the pages of your project, this is an example:

```
- /pages
  - /[language]
    - about-us.astro
    - index.astro
  - 404.astro
  - about-us.astro
  - index.astro
```

3.- The pages inside this directory will need to add an aditionnal validation for know if the language is correct and it is listeng in the configuration, you can add tis like this

`pages/[language]/index.astro`

```ts
---
import { getStaticLanguage } from '@global/util/language';

export const getStaticPaths = getStaticLanguage;
---
```

4.- Next you will create the translation files, we recommend to use ts files instead of json but you can aslo use json files

```ts
const aboutUsLocale =
{
  en:
  {
    welcome: 'Hello world',
  },
  es:
  {
    welcome: 'Hola mundo',
  }
};

export { aboutUsLocale };
```


5.- To end you will use this file and make the translation, use this inside you component page and not in the `pages/**` components

```ts
---
import { getI18n, getStaticLanguage, getLanguageFromUrl } from '@global/util/language';
import { aboutUsLocale } from '@module/landing/locale/about_us';

const language = getLanguageFromUrl(Astro.url);
const i18n = getI18n(language, aboutUsLocale);
---

<h1>{i18n.welcome}</h1>
```

6.- Create the file `src/middleware.ts` and add the following code, this will redirect the default language urls to the base urls, and examples of this is, `/en/about-us` redirect to `/about-us`

```ts
import { getLanguagePathname, validateDefaultLanguage } from '@global/util/language';
import { defineMiddleware } from 'astro/middleware';

const onRequest = defineMiddleware(async (context, next) =>
{
  if(validateDefaultLanguage(context.url))
  {
    const pathname = getLanguagePathname(context.url);
    const redirectCode = 302;

    return Response.redirect(new URL(pathname, context.url), redirectCode);
  }

  return next();
});

export { onRequest };
```

That's all the configuration nedeed for i18n in this project.

<p align="right">
  ( <a href="#astro-template-webpage">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<h2 id="usage">
  <img src="./asset/icon/rocket.svg" width="24px" align="center" />
  Usage
</h2>

Before installing all the dependencies you can run the project with

```bash
pnpm dev
```

To see the production ready page you can run

```bash
pnpm staging
```

Builds the app for production to the `dist` folder.

It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes, also it compress all the assets and images in the dist folder.

Your app is ready to be deployed.

<p align="right">
  ( <a href="#astro-template-webpage">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<h2 id="scripts">
  <img src="./asset/icon/terminal.svg" width="24px" align="center" />
  Scripts
</h2>

The following scripts are available in the `package.json`:

- `preinstall`: This script is for only allow pnpm as package manager
- `postinstall`: This script is for setting up the git hooks and validate the error after commit to github
- `dev`: This script is for see the webpage in dev mode
- `staging`: This script is for see production, this run the env variables an set the webpage with all the settings
- `build-dev`: This script compile the project in dev mode
- `build`: This script is for build in production
- `lint`: This script is for format and lint all the files
- `lint-eslint`: This script is for lint ts, tsx and more files
- `lint-stylelint`: This script is for lint css files

<p align="right">
  ( <a href="#astro-template-webpage">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<h2 id="browser-support">
  <img src="./asset/icon/world.svg" alt="World icon" width="24px" align="center" />
  Browser support
</h2>

Here is the list of all the browser this website support

<table align="center" border>
  <tr>
    <td align="center">
      <div >
        <img src="./asset/illustration/edge.svg" alt="edge" width="24" />
        <br />
        <strong>IE / Edge</strong>
      </div>
    </td>
    <td align="center">
      <img src="./asset/illustration/firefox.svg" alt="firefox" width="24" />
      <br />
      <strong>Firefox</strong>
    </td>
    <td align="center">
      <img src="./asset/illustration/safari.svg" alt="safari" width="24" />
      <br />
      <strong>Safari</strong>
    </td>
    <td align="center">
      <img src="./asset/illustration/safari.svg" alt="safari" width="24" />
      <br />
      <strong>Safari IOS</strong>
    </td>
    <td align="center">
      <img src="./asset/illustration/samsung_internet.svg" alt="samsung internet" width="24" />
      <br />
      <strong>Samsung</strong>
    </td>
    <td align="center">
      <img src="./asset/illustration/opera.svg" alt="opera" width="24" />
      <br />
      <strong>Opera</strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./asset/icon/check.svg" width="20px" align="center" />
    </td>
    <td align="center">
      <img src="./asset/icon/check.svg" width="20px" align="center" />
    </td>
    <td align="center">
      <img src="./asset/icon/check.svg" width="20px" align="center" />
    </td>
    <td align="center">
      <img src="./asset/icon/check.svg" width="20px" align="center" />
    </td>
    <td align="center">
      <img src="./asset/icon/check.svg" width="20px" align="center" />
    </td>
    <td align="center">
      <img src="./asset/icon/check.svg" width="20px" align="center" />
    </td>
  </tr>
</table>

<p align="right">
  ( <a href="#astro-template-webpage">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<pre align="center">
  Copyright © All rights reserved,
  developed by ElegantCoder and
</pre>
<div align="center">
  <img src="./asset/illustration/astralys_logo.svg" width="120px" align="center" />
</div>

<img src="./asset/illustration/wave_footer.svg" alt="wave" width="100%" align="center"/>