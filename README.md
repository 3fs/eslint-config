# eslint-config [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

#### An ESLint [Shareable Config][shareable-configs-url]

## Installation

```sh
npm install @3fs/eslint-config [eslint@6.5.0]
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs][shareable-configs-url] on the
official ESLint website.

To use this shareable config, first run this:

```sh
npm install --save-dev eslint@6.5.0 @3fs/eslint-config
```

Then, add this to your .eslintrc(.js|.json|.yml) file:

```json
{
  "extends": "@3fs"
}
```

*Note: We omitted the `/eslint-config` sufix since it is automatically assumed by ESLint. Only works for esnext since its specified as default*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

### All available configs

* `@3fs` or `@3fs/eslint-config/configs/esnext` - ES6+ config; Requires [babel-eslint@10.0.3][babel-eslint]
* `@3fs/eslint-config/configs/es5` - ES5 config
* `@3fs/eslint-config/configs/node` - ES6+ NodeJS config; Requires [babel-eslint@10.0.3][babel-eslint]
* `@3fs/eslint-config/configs/node-es5` - ES5 NodeJS config
* `@3fs/eslint-config/configs/ng` - AngularJS config; Requires [eslint-plugin-angular@4.0.1][eslint-plugin-angular]
* `@3fs/eslint-config/configs/react` - React config; Requires [babel-eslint@10.0.3][babel-eslint], [eslint-plugin-react@7.14.3][eslint-plugin-react], [eslint-plugin-jsx-a11y@6.2.3][eslint-plugin-jsx-a11y]
* `@3fs/eslint-config/configs/react-native` - React Native config; Requires [babel-eslint@10.0.3][babel-eslint], [eslint-plugin-react@7.14.3][eslint-plugin-react], [eslint-plugin-jsx-a11y@6.2.3][eslint-plugin-jsx-a11y] and [eslint-plugin-react-native@3.7.0][eslint-plugin-react-native]
* `@3fs/eslint-config/configs/ts` - TypeScript config; Requires [@typescript-eslint/eslint-plugin@2.3.1][@typescript-eslint/eslint-plugin] and [@typescript-eslint/parser@2.3.1][@typescript-eslint/parser]



[//]: # (URLs)

[//]: # (main)

[npm-image]: https://img.shields.io/npm/v/@3fs/eslint-config.svg
[npm-url]: https://npmjs.org/package/@3fs/eslint-config
[downloads-image]: https://img.shields.io/npm/dm/@3fs/eslint-config.svg
[downloads-url]: https://npmjs.org/package/@3fs/eslint-config
[shareable-configs-url]: http://eslint.org/docs/developer-guide/shareable-configs

[//]: # (other)

[babel-eslint]: https://www.npmjs.com/package/babel-eslint
[eslint-plugin-angular]: https://www.npmjs.com/package/eslint-plugin-angular
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[@typescript-eslint/parser]: https://www.npmjs.com/package/@typescript-eslint/parser
[@typescript-eslint/eslint-plugin]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
[eslint-plugin-react-native]: https://www.npmjs.com/package/eslint-plugin-react-native

