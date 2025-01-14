# 3fs eslint-config

[![npm version](https://badge.fury.io/js/@3fs%2Feslint-config.svg)](https://badge.fury.io/js/@3fs%2Feslint-config)

#### An ESLint [Shareable Config](https://eslint.org/docs/latest/extend/shareable-configs)

## Deployment

Create a new annotated tag and push it to github.

```sh
git tag -a v1.0.0 -m "Tag comment"
git push origin v1.0.0
```

## Installation

```sh
npm install @3fs/eslint-config eslint
# OR
yarn add  @3fs/eslint-config eslint
```

## Usage

Shareable configs are designed to simplify configuration in eslint config files.
You can learn more about
[Shareable Configs](https://eslint.org/docs/latest/extend/shareable-configs) on the official ESLint website.

To use this shareable config, first run this:

```sh
npm install --save-dev eslint @3fs/eslint-config
# OR
yarn add --dev eslint @3fs/eslint-config
```

Then, add this to your `eslint.config.mjs` file:

```js
import trifsPreset from '@3fs/eslint-config';

export default [...trifsPreset];
```

You can override settings from the shareable config by adding them as a next element in the array.

### All available configs

- `@3fs` or `@3fs/eslint-config/configs/react-ts` - React config
