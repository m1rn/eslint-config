import { GLOB_JSX_MJSX, GLOB_TSX_MTSX } from '../globs'
import { PARSER_TS } from '../parsers'
import { PLUGIN_REACT, PLUGIN_SORT, PLUGIN_STYLISTIC } from '../plugins'
import { RULE_JSX_BASE, RULE_JSX_STYLE, RULE_JSX_TYPE_AWARE } from '../rules'
import { defineConfigs, isTrue } from '../utils'

export type JsxConfigOptions = {
  tsx?: boolean,
  style?: boolean
}

export function jsx(options: JsxConfigOptions = {}) {
  const {
    tsx = true,
    style = true
  } = options

  const isTsxEnabled = isTrue(tsx)
  const isStyleEnabled = isTrue(style)

  const files = isTsxEnabled ? [GLOB_JSX_MJSX, GLOB_TSX_MTSX] : [GLOB_JSX_MJSX]

  return defineConfigs([
    {
      name: 'base',
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      plugins: {
        [PLUGIN_REACT.meta.name]: PLUGIN_REACT
      },
      rules: {
        ...RULE_JSX_BASE,
        ...RULE_JSX_TYPE_AWARE
      }
    },
    isTsxEnabled
      ? {
          name: 'tsx',
          files: [GLOB_TSX_MTSX],
          languageOptions: {
            parser: PARSER_TS
          }
        }
      : {},
    isStyleEnabled
      ? {
          name: 'style',
          files,
          plugins: {
            [PLUGIN_SORT.meta.name]: PLUGIN_SORT,
            [PLUGIN_STYLISTIC.meta.name]: PLUGIN_STYLISTIC
          },
          rules: {
            ...RULE_JSX_STYLE
          }
        }
      : {}
  ], 'jsx')
}
