# eslint-config [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

#### An ESLint [Shareable Config][shareable-configs-url]

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

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs][shareable-configs-url] on the
official ESLint website.

To use this shareable config, first run this:

```sh
npm install --save-dev eslint @3fs/eslint-config
# OR
yarn add --dev eslint @3fs/eslint-config
```

Then, add this to your .eslintrc(.js|.json|.yml) file:

```json
{
  "extends": "@3fs"
}
```

_Note: We omitted the `/eslint-config` sufix since it is automatically assumed by ESLint. Only works for esnext since its specified as default_

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

### All available configs

- `@3fs` or `@3fs/eslint-config/configs/angular` - Angular config
- `@3fs/eslint-config/configs/react` - React config
