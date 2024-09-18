import { GLOB_JSX_MJSX, GLOB_TSX_MTSX } from '../globs'
import { PARSER_TS } from '../parsers'
import { PLUGIN_REACT } from '../plugins'
import { RULE_REACT_BASE } from '../rules'
import { defineConfigs, isTrue } from '../utils'

export type ReactConfigOptions = {
  tsx?: boolean
}

export function react(options: ReactConfigOptions = {}) {
  const { tsx = true } = options

  const isTsxEnabled = isTrue(tsx)

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
        ...RULE_REACT_BASE
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
      : {}
  ], 'react')
}
