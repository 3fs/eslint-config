# eslint-config [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

#### An ESLint [Shareable Config][shareable-configs-url]

## Installation

```sh
npm install @3fs/eslint-config [eslint@4.18.1]
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs][shareable-configs-url] on the
official ESLint website.

To use this shareable config, first run this:

```sh
npm install --save-dev eslint@4.18.1 @3fs/eslint-config
```

Then, add this to your .eslintrc(.js|.json|.yml) file:

```json
{
  "extends": "@3fs"
}
```

*Note: We omitted the `/eslint-config` sufix since it is automatically assumed by ESLint. Only works for defualt*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

### All available configs

* `@3fs` - ES5 config
* `@3fs/eslint-config/configs/esnext` - ES6+ config
* `@3fs/eslint-config/configs/node` - ES5 NodeJS config (might be removed in future)
* `@3fs/eslint-config/configs/node-esnext` - ES6+ NodeJS config (might be renamed to `node` in future)
* `@3fs/eslint-config/configs/ng` - AngularJS config; Requires [eslint-plugin-angular][eslint-plugin-angular]
* `@3fs/eslint-config/configs/react` - React config; Requires [eslint-plugin-react][eslint-plugin-react], [eslint-plugin-jsx-a11y][eslint-plugin-jsx-a11y]
* `@3fs/eslint-config/configs/ts` - TypeScript config; Requires [typescript-eslint-parser][typescript-eslint-parser] (has a bug: [#77][typescript-parser-bug-1]) and [eslint-plugin-typescript][eslint-plugin-typescript]



[//]: # (URLs)

[//]: # (main)

[npm-image]: https://img.shields.io/npm/v/@3fs/eslint-config.svg
[npm-url]: https://npmjs.org/package/@3fs/eslint-config
[downloads-image]: https://img.shields.io/npm/dm/@3fs/eslint-config.svg
[downloads-url]: https://npmjs.org/package/@3fs/eslint-config
[shareable-configs-url]: http://eslint.org/docs/developer-guide/shareable-configs

[//]: # (other)

[eslint-plugin-angular]: https://www.npmjs.com/package/eslint-plugin-angular
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[typescript-eslint-parser]: https://www.npmjs.com/package/typescript-eslint-parser
[eslint-plugin-typescript]: https://www.npmjs.com/package/eslint-plugin-typescript

[//]: # (TS bugs)

[typescript-parser-bug-1]: https://github.com/eslint/typescript-eslint-parser/issues/77
