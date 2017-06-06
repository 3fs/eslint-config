# eslint-config-3fs [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

#### An ESLint [Shareable Config][shareable-configs-url]

## Installation

```bash
npm install eslint-config-3fs [eslint]
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs][shareable-configs-url] on the
official ESLint website.

To use this shareable config, first run this:

```bash
npm install --save-dev eslint eslint-config-3fs
```

Then, add this to your .eslintrc(.js|.json|.yml) file:

```
{
  "extends": "3fs"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

### All available configs

* `3fs` - ES5 config
* `3fs/configs/esnext` - ES6 config
* `3fs/configs/node` - NodeJS config
* `3fs/configs/ng` - AngularJS config; Requires [eslint-plugin-angular][eslint-plugin-angular]
* `3fs/configs/react` - [WIP] React config; Requires [eslint-plugin-react][eslint-plugin-react]


[//]: # (URLs)

[//]: # (main)

[npm-image]: https://img.shields.io/npm/v/@3fs/eslint-config-3fs.svg
[npm-url]: https://npmjs.org/package/@3fs/eslint-config-3fs
[downloads-image]: https://img.shields.io/npm/dm/@3fs/eslint-config-3fs.svg
[downloads-url]: https://npmjs.org/package/@3fs/eslint-config-3fs
[shareable-configs-url]: http://eslint.org/docs/developer-guide/shareable-configs

[//]: # (other)

[eslint-plugin-angular]: https://www.npmjs.com/package/eslint-plugin-angular
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react