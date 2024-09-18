import { GLOBALS_ES2024 } from '../globals'
import { GLOB_JS_MJS, GLOB_JSX_MJSX } from '../globs'
import { PLUGIN_IMPORT, PLUGIN_SORT, PLUGIN_STYLISTIC, PLUGIN_UNICORN } from '../plugins'
import { RULE_JS_BASE, RULE_JS_STYLE } from '../rules'
import { defineConfigs, isTrue } from '../utils'

export type JavaScriptConfigOptions = {
  jsx?: boolean,
  style?: boolean
}

export function javascript(options: JavaScriptConfigOptions = {}) {
  const {
    jsx = true,
    style = true
  } = options

  const isJsxEnabled = isTrue(jsx)
  const isStyleEnabled = isTrue(style)

  const files = isJsxEnabled ? [GLOB_JS_MJS, GLOB_JSX_MJSX] : [GLOB_JS_MJS]

  return defineConfigs([
    {
      name: 'base',
      files,
      languageOptions: {
        ecmaVersion: 'latest',
        globals: {
          ...GLOBALS_ES2024
        },
        parserOptions: {
          ecmaVersion: 'latest'
        }
      },
      plugins: {
        [PLUGIN_UNICORN.meta.name]: PLUGIN_UNICORN,
        [PLUGIN_IMPORT.meta.name]: PLUGIN_IMPORT
      },
      rules: {
        ...RULE_JS_BASE
      }
    },
    isJsxEnabled
      ? {
          name: 'jsx',
          files: [GLOB_JSX_MJSX],
          languageOptions: {
            parserOptions: {
              ecmaFeatures: {
                jsx: true
              }
            }
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
            ...RULE_JS_STYLE
          }
        }
      : {}
  ], 'javascript')
}
