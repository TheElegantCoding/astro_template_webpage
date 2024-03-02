<img src="./asset/cover.svg" alt="edge" width="100%" align="center" />

<br />

<h1 id="astro-template-webpage">📦️ Astro template webpage</h1>

---

<h2 id="about">📝 About</h2>

<table border>
<tr>
<td>

Tired of sluggish websites and SEO headaches? Unleash the power of lightning-fast performance and built-in optimization with this Astro template builder! Crafted for developers who value speed and simplicity, this robust toolkit empowers you to build stunning websites that soar in search engines and captivate users.

Ditch the struggle and focus on what matters most - crafting impactful content that drives engagement. Welcome to the future of web development - where SEO and performance work hand-in-hand.

<p align="right">(<a href="#astro-template-webpage">⬆️ back to top</a>)</p>
</td>
</tr>
</table>

---

## 📚 Table of content

- [📝 About](#about)
- [🛰️ Features](#features)
- [⚡️ Requirements](#requirements)
- [📦 Installation](#installation)
- [⚙️ Configuration](#configuration)
  - [Site configuration](#site-configuration)
  - [Environment Varaibles](#enviroment-varaible)
- [🚀 Usage](#usage)
- [⚡️ Scripts](#scripts)
- [🌎 Browser support](#browser-support)

---

<h2 id="features">🛰️ Features</h2>

- `🌌 Astro` - Astro Framework
- `🦾 Typescript` - Extremely strict type checking
  - `✅ Absolute imports` -  No more bad imports
- `💎 Sass` - Css framework for ui development
  - `✅ BEMIT` - Arquitecture for sass
  - `✅ Mobile firts` - Best performance for css
  - `✅ Reset` - Reset css for match style between browsers
  - `✅ Join media queries` - Join media queries for small file size
  - `✅ Vendor prefixes` - Vendor prefixes for all support
  - `✅ Remove unused css` - Remove unused css in build
- `🏗️ Clean arquitecture` - For clean code and scalablility
- `🌎 SEO` - SEO meta data, open graph and more
  - `✅ Sitemap` - Sitemap generator
  - `✅ RSS` - RSS generator
  - `✅ Open graph` - Advanced open graph SEO
  - `✅ ️Robot` - Robot txt configuration
  - `✅ Canonical` - Auto canonical url
  - `✅ Google search console` - For SEO stadistics
  - `✅ Google analytic` - For analytics of the webpage
- `📐 Linter` - Linter and formatting all kind of files
  - `✅ Eslint` - Litner and formatting ts and js files
  - `✅ Stylelint` - Linter css files
- `🕹️ Git` - Control version and more
  - `✅ Github issue template` - Github issues organization
  - `✅ Githooks` - Git hook for validate code quality
  - `✅ Changelog` - Changelog and realese for github
  - `✅ Sematic release` - Automatization of releases
- `⚙️ Configuration` - Vscode, env variables and more
  - `✅ Vscode configuration` - Vscode recommendations, extensions and more
  - `✅ Env validation` - Enviroment variables validation
- `🧩 Components`
  - `✅ Image component` - Ready to use optimize image component
  - `✅ Show component` - Ready to use show component
  - `✅ For component` - Ready to use for map components
- `️⚡️ Performance`
  - `✅ Web worker (partytown)` - For lazy-loaded large libraries
  - `✅ Bundler analizer` - Analize your bundle size
  - `✅ Compress` - Compress images, font, css, js, and html
  - `✅ Non blocking` - Non blocking js, css and more
  - `✅ Font optimization` - Font transformation and declaration
- `📦 Pnpm` - Fast package manager
- `💯 Perfect lighthouse score` - Because performance matters

---

<h2 id="requirements">⚡️ Requirements</h2>

- node >= **20.10.0**
- git >= **2.38**
- pnpm >= **8.2.0**

<p align="right">(<a href="#webpage-pablote-beef">back to top</a>)</p>

---

<h2 id="installation">📦 Installation</h2>

After cloning the repo run this command to install all the dependencies

```bash
pnpm install
```

<p align="right">(<a href="#webpage-pablote-beef">back to top</a>)</p>

---

<h2 id="configuration">⚙️ Configuration</h2>

The configuration needed for this project is to set up the env variables and also the site configuration object here are the examples:

<h3 id="site-configuration">Site configuration</h3>

This file is located in `src/global/configuration/site_configuration.ts`

- `siteName` - Global title of the webpage
- `description` - Global description of the webpage
- `defaultLocale` - Default locale of the webpage
- `autor` - Author object that appears in a meta tag
  - `author.name` - Name of the author
  - `author.email` - Email of the author
  - `author.web` - Web of the author
- `googleSiteVerificationId` - Id of google search console
- `googleAnalyticId` - Id of the google analytics

<h3 id="environment-varaible">Evironment varaibles</h3>

This environment variables are located in `src/global/env/**.env`

file: **.example.dev.env**

```yml
PORT=3000
BASE_URL=http://localhost:$VITE_PORT
```

file: **.example.prod.env**

```yml
BASE_URL=
```

file: **.example.staging.env**

```yml
PORT=4173
BASE_URL=http://localhost:$VITE_PORT
```

<p align="right">(<a href="#webpage-pablote-beef">back to top</a>)</p>

---

<h2 id="usage">🚀 Usage</h2>

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

<p align="right">(<a href="#webpage-pablote-beef">back to top</a>)</p>

---

<h2 id="scripts">⚡️ Scripts</h2>

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

<p align="right">(<a href="#webpage-pablote-beef">back to top</a>)</p>

---

<h2 id="browser-support">🌎 Browser support</h2>

Here is the list of all the browser this website support

<table align="center" border>
  <tr>
    <td align="center">
      <div >
        <img src="./asset/edge.svg" alt="edge" width="24" />
        <br />
        <strong>IE / Edge</strong>
      </div>
    </td>
    <td align="center">
      <img src="./asset/firefox.svg" alt="firefox" width="24" />
      <br />
      <strong>Firefox</strong>
    </td>
    <td align="center">
      <img src="./asset/safari.svg" alt="safari" width="24" />
      <br />
      <strong>Safari</strong>
    </td>
    <td align="center">
      <img src="./asset/safari.svg" alt="safari" width="24" />
      <br />
      <strong>Safari IOS</strong>
    </td>
    <td align="center">
      <img src="./asset/samsung_internet.svg" alt="samsung internet" width="24" />
      <br />
      <strong>Samsung</strong>
    </td>
    <td align="center">
      <img src="./asset/opera.svg" alt="opera" width="24" />
      <br />
      <strong>Opera</strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      ✔️
    </td>
    <td align="center">
      ✔️
    </td>
    <td align="center">
      ✔️
    </td>
    <td align="center">
      ✔️
    </td>
    <td align="center">
      ✔️
    </td>
    <td align="center">
      ✔️
    </td>
  </tr>
</table>

<p align="right">(<a href="#astro-template-webpage">back to top</a>)</p>
