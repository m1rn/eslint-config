import { addExtraFilesToConfigs, applyConfig, isPackageExists } from '../utils'
import { browser } from './browser'
import { html } from './html'
import type { HtmlConfigOptions } from './html'
import { ignores } from './ignores'
import type { IgnoresConfigOptions } from './ignores'
import { javascript } from './javascript'
import type { JavaScriptConfigOptions } from './javascript'
import { json } from './json'
import type { JsonConfigOptions } from './json'
import { jsx } from './jsx'
import type { JsxConfigOptions } from './jsx'
import { markdown } from './markdown'
import type { MarkdownConfigOptions } from './markdown'
import { node } from './node'
import { react } from './react'
import type { ReactConfigOptions } from './react'
import { typescript } from './typescript'
import type { TypeScriptConfigOptions } from './typescript'

export type M1rnConfigOptions = {
  ignores?: boolean | IgnoresConfigOptions,
  node?: boolean,
  browser?: boolean,
  javascript?: boolean | JavaScriptConfigOptions,
  typescript?: boolean | TypeScriptConfigOptions,
  jsx?: boolean | JsxConfigOptions,
  react?: boolean | ReactConfigOptions,
  html?: boolean | HtmlConfigOptions,
  json?: boolean | JsonConfigOptions,
  markdown?: boolean | MarkdownConfigOptions
}

export function m1rn(options: M1rnConfigOptions = {}) {
  const hasTypeScript = isPackageExists('typescript')
  const hasReact = isPackageExists('react')

  const {
    ignores: ignoresOptions = true,
    node: nodeOptions = true,
    browser: browserOptions = true,
    javascript: javascriptOptions = true,
    typescript: typescriptOptions = hasTypeScript,
    jsx: jsxOptions = {
      tsx: hasTypeScript
    },
    react: reactOptions = hasReact
      ? {
          tsx: hasTypeScript
        }
      : false,
    html: htmlOptions = true,
    json: jsonOptions = true,
    markdown: markdownOptions = true
  } = options

  const ignoresConfigs = applyConfig(ignores, ignoresOptions)
  const nodeConfigs = applyConfig(node, nodeOptions)
  const browserConfigs = applyConfig(browser, browserOptions)
  const javascriptConfigs = applyConfig(javascript, javascriptOptions)
  const typescriptConfigs = applyConfig(typescript, typescriptOptions)
  const jsxConfigs = applyConfig(jsx, jsxOptions)
  const reactConfigs = applyConfig(react, reactOptions)
  const htmlConfigs = applyConfig(html, htmlOptions)
  const jsonConfigs = applyConfig(json, jsonOptions)
  const markdownConfigs = applyConfig(markdown, markdownOptions)

  addExtraFilesToConfigs([
    ...nodeConfigs,
    ...browserConfigs
  ], [
    ...javascriptConfigs[0]?.files ?? [],
    ...typescriptConfigs[0]?.files ?? [],
    ...jsxConfigs[0]?.files ?? [],
    ...reactConfigs[0]?.files ?? []
  ])

  return [
    ...ignoresConfigs,
    ...nodeConfigs,
    ...browserConfigs,
    ...javascriptConfigs,
    ...typescriptConfigs,
    ...jsxConfigs,
    ...reactConfigs,
    ...htmlConfigs,
    ...jsonConfigs,
    ...markdownConfigs
  ]
}
