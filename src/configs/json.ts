import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../globs'
import { PARSER_JSON } from '../parsers'
import { PLUGIN_JSON } from '../plugins'
import { RULE_JSON_BASE, RULE_JSON_STYLE } from '../rules'
import { defineConfigs, isTrue } from '../utils'

export type JsonConfigOptions = {
  style?: boolean
}

export function json(options: JsonConfigOptions = {}) {
  const { style = true } = options

  const isStyleEnabled = isTrue(style)

  return defineConfigs([
    {
      name: 'base',
      files: [GLOB_JSON, GLOB_JSONC, GLOB_JSON5],
      languageOptions: {
        parser: PARSER_JSON
      },
      plugins: {
        [PLUGIN_JSON.meta.name]: PLUGIN_JSON
      },
      rules: {
        ...RULE_JSON_BASE
      }
    },
    isStyleEnabled
      ? {
          name: 'style',
          files: [GLOB_JSON, GLOB_JSONC, GLOB_JSON5],
          rules: {
            ...isStyleEnabled && RULE_JSON_STYLE
          }
        }
      : {}
  ], 'json')
}
