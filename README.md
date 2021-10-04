# Hacktoberfest Progressive Web App

<img loading="lazy" alt="an image of what the starter looks like" src="https://github.com/codess-aus/hacktoberfest-webpage/blob/main/assets/readme/intro.png"/>

Welcome to the my Hacktoberfest WebSite[Hacktoberfest](https://hacktoberfest.digitalocean.com/resources) pwa-starter!

Help me build on this start to create a beautiful website for hacktoberfest.

It's a Progressive Web App built [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) built in the simplest possible form using [lit](https://lit.dev/). Lit gives you all of the developer experience of React with all the benefits of Web Components such as smaller bundles, simplicity and faster load times.

## Getting Started

### Supported Browsers
- Edge
- Chrome
- Firefox
- Safari

### Prequisites

You will need the following things properly installed on your computer.

* [Node.js](http://nodejs.org/) (with NPM)
* [NPM](https://www.npmjs.com/get-npm)

You should also be familiar with [TypeScript](https://www.typescriptlang.org/) which we use for this project. This helps give you more guidance as you code from [intellisense](https://code.visualstudio.com/docs/editor/intellisense) when using [VSCode](https://code.visualstudio.com/).

### Recommended Development setup

We recommend the following tools for your dev setup:

* Editor: [VSCode](https://code.visualstudio.com/)
* Terminal: [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701?activetab=pivot:overviewtab) or [hyper](https://hyper.is/)
* PWABuilder VSCode extension: [PWABuilder VSCode extension](https://marketplace.visualstudio.com/items?itemName=PWABuilder.pwabuilder-extension)
* lit-html VSCode extension: [lit-html VSCode extension](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)

### Development

Run `npm install` and then run `npm run dev`, the starter should open in your default browser. From here you can start developing, your changes will be rebuilt and reloaded in the browser as you develop.

### Building for Production

Run `npm run build`, the `dist/` folder will contain your built PWA. The production build will also generate a pre-caching service worker using [Workbox](https://developers.google.com/web/tools/workbox/modules/workbox-precaching).

## Deployment and Packaging

### Deployment

Once your PWA is ready to deploy we recommend [Azure static website hosting](https://docs.microsoft.com/en-us/learn/modules/publish-app-service-static-web-app-api/) for deploying your PWA.


### Packaging

Many app stores, including the Microsoft Store and the Google Play Store support PWAs. To package your PWA for deployment to these app stores head back to https://pwabuilder.com/, put in your URL and hit `Build My PWA`.


## Addons

### Microsoft Graph Toolkit

The [Microsoft Graph Toolkit](https://docs.microsoft.com/en-us/graph/toolkit/overview) is a collection of reusable, framework-agnostic web components and helpers for accessing and working with Microsoft Graph. The components are fully functional right of out of the box, with built in providers that authenticate with and fetch data from Microsoft Graph.

### Authentication

For Authentication you can use the [PWABuilder pwa-auth](https://github.com/pwa-builder/pwa-auth) web component. This component lets your users sign-in/sign-up using their Microsoft, Google, or Facebook account. Your app receives their email address, name, and profile picture. Built with ❤ by the PWABuilder team.

😎 Bonus: It's super lightweight, pulling in the authentication libraries only when the user tries to sign-in with one.

😎😎 Double bonus: It uses the new [Credential Management APIs](https://developers.google.com/web/fundamentals/security/credential-management) to speed through sign-ins without bulky pop-ups or redirects.

## Folder Structure

```
pwa-starter
│   README.md (docs)
│   rollup.config.js (bundler config https://rollupjs.org/)
|   tsconfig.json (TypeScript config https://www.typescriptlang.org/)
|   pwabuilder-sw.js (Service Worker https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
|   package.json (https://docs.npmjs.com/creating-a-package-json-file)
|   package-lock.json (https://docs.npmjs.com/files/package-lock.json)
|   manifest.json (web manifest https://developer.mozilla.org/en-US/docs/Web/Manifest)
|   index.prod.html (index.html file used for production builds)
|   index.html (index.html for dev builds)
|   *note*: The index.prod.html registers a service worker which caches assets, so index.html is used for dev builds
|   .gitignore (git config file https://git-scm.com/docs/gitignore)
│
└───src (most of your development will happen here)
│   │   global.css (used for global CSS styles and CSS variables)
│   │
│   └───script
│       │
│       |
|       └───components
|           |   header.ts (header component)
|       |
|       |
|       └───pages
|           |   app-index.ts (app-index component)
|           |   app-home.ts (app-home component)
|           |   app-about.ts (app-about component)

```

The rules:

* Let's make this a standard blog website. So you can propose changes to colors, fonts, menus, pages etc as your pull requests.
* Let's make it beautiful - I realise this is subjective, so in your pull request - be explicit about the change you want to make and why you think it makes the site more beautiful
* Let's make it accessible - plenty of content on the web talking about accessibility features, colors etc - if you implement something accessible - you get extra kudos.
* Let's keep it clean - adhere to the code of conduct. Be kind, online, all the time. Don't be rude, offensive and keep your politics off the site.

