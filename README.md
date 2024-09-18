# @m1rn/eslint-config

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/137921275/258572401-482172f4-a813-41ae-9e42-d17176ae2893.svg" width="100" height="100" align="right" alt="ESLint" />

[![Version](https://img.shields.io/npm/v/@m1rn/eslint-config?color=4b32c3&label=)](https://www.npmjs.com/package/@m1rn/eslint-config)
[![License](https://img.shields.io/npm/l/@m1rn/eslint-config?color=4b32c3&label=)](LICENSE.md)

ESLint preset configuration library.

## Features

- **Best Practices**: Ensures accurate and reliable type checking.
- **Strict Configurations**: Keeps your code quality at a high standard.
- **Automatic Formatting**: No need to use Prettier.
- **Flexible Setup**: Adapts to various project needs.

## Prerequisites

### Node.js
- Version >= 18.20.0
- ESM Project

### ESLint
- Version >= 9.6.0
- Flat Config

## Installation

```bash
npm install @m1rn/eslint-config --save-dev
```

## Usage

Typically, you can import `m1rn` preset and use it directly:

```javascript
import { m1rn } from '@m1rn/eslint-config'

export default m1rn()
```

Alternatively, you can configure each integration separately:

```javascript
import { m1rn } from '@m1rn/eslint-config'

export default m1rn({
  ignores: {
    gitignore: true
  },
  node: true,
  browser: true,
  javascript: {
    jsx: true,
    style: true
  },
  typescript: {
    tsx: true,
    style: true,
    typeAware: true
  },
  jsx: {
    tsx: true,
    style: true
  },
  react: {
    tsx: true
  },
  html: {
    a11y: true,
    style: true
  },
  json: {
    style: true
  },
  markdown: {
    codeBlocks: true
  }
})
```

You can also import specific presets for granular configuration and combine them as you wish:

```javascript
import {
  ignores,
  node,
  browser,
  javascript,
  typescript,
  jsx,
  react,
  html,
  json,
  markdown
} from '@m1rn/eslint-config'

export default [
  ...ignores(/* Options */),
  ...node(),
  ...browser(),
  ...javascript(/* Options */),
  ...typescript(/* Options */),
  ...jsx(/* Options */),
  ...react(/* Options */),
  ...html(/* Options */),
  ...json(/* Options */),
  ...markdown(/* Options */)
]
```

## Presets

- [`m1rn(options?)`](./src/configs/m1rn.ts)

  A comprehensive configuration preset that combines multiple configurations based on the provided options. By default, it enables certain presets based on the project environment and dependencies.

- [`ignores(options?)`](./src/configs/ignores.ts)

  Globally ignore certain files and directories that are commonly excluded, as well as those specified in the `.gitignore` file.

- [`node()`](./src/configs/node.ts)

  Specific rules and settings for Node.js environments.

- [`browser()`](./src/configs/browser.ts)

  Specific rules and settings for Browser environments.

- [`javascript(options?)`](./src/configs/javascript.ts)

  Specific rules and settings for JavaScript.

- [`typescript(options?)`](./src/configs/typescript.ts)

  Specific rules and settings for TypeScript.

- [`jsx(options?)`](./src/configs/jsx.ts)

  Specific rules and settings for JSX.

- [`react(options?)`](./src/configs/react.ts)

  Specific rules and settings for React.

- [`html(options?)`](./src/configs/html.ts)

  Specific rules and settings for HTML.

- [`json(options?)`](./src/configs/json.ts)

  Specific rules and settings for JSON、JSONC and JSON5.

- [`markdown(options?)`](./src/configs/markdown.ts)

  Specific rules and settings for Markdown.

## Plugins Name

I renamed plugins to make the overall naming more consistent and easier to write.

| Plugin                                                                                     | Name        |
| ------------------------------------------------------------------------------------------ | ----------- |
| [@eslint/markdown](https://github.com/eslint/markdown)                                     | `md`        |
| [@eslint-react/eslint-plugin](https://github.com/rel1cx/eslint-react)                      | `react`     |
| [@html-eslint/eslint-plugin](https://github.com/yeonjuan/html-eslint)                      | `html`      |
| [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic)           | `stylistic` |
| [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint) | `ts`        |
| [eslint-plugin-import-x](https://github.com/un-es/eslint-plugin-import-x)                  | `import`    |
| [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc)                    | `json`      |
| [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)      | `sort`      |
| [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)             | `unicorn`   |

When you want to override rules, or disable them inline, you need to update to the new prefix:

```diff
-// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
+// eslint-disable-next-line ts/consistent-type-definitions
type foo = { bar: 2 }
```

## See Also

- [@m1rn/tsconfig](https://github.com/m1rn/tsconfig)

## License

[MIT](LICENSE.md) License &copy; 2024-PRESENT [m1rn](https://github.com/m1rn)
