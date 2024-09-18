import { GLOB_HTML } from '../globs'
import { PARSER_HTML } from '../parsers'
import { PLUGIN_HTML } from '../plugins'
import { RULE_HTML_A11Y, RULE_HTML_BASE, RULE_HTML_STYLE } from '../rules'
import { defineConfigs, isTrue } from '../utils'

export type HtmlConfigOptions = {
  a11y?: boolean,
  style?: boolean
}

export function html(options: HtmlConfigOptions = {}) {
  const {
    a11y = true,
    style = true
  } = options

  const isA11YEnabled = isTrue(a11y)
  const isStyleEnabled = isTrue(style)

  const files = [GLOB_HTML]

  return defineConfigs([
    {
      name: 'base',
      files,
      languageOptions: {
        parser: PARSER_HTML
      },
      plugins: {
        [PLUGIN_HTML.meta.name]: PLUGIN_HTML
      },
      rules: {
        ...RULE_HTML_BASE
      }
    },
    isA11YEnabled
      ? {
          name: 'a11y',
          files,
          rules: {
            ...RULE_HTML_A11Y
          }
        }
      : {},
    isStyleEnabled
      ? {
          name: 'style',
          files,
          rules: {
            ...RULE_HTML_STYLE
          }
        }
      : {}
  ], 'html')
}
