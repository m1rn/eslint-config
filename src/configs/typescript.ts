import { join } from 'node:path'
import { cwd } from 'node:process'
import { GLOB_MARKDOWN_CODE_BLOCKS, GLOB_TS_MTS, GLOB_TSX_MTSX } from '../globs'
import { PARSER_TS } from '../parsers'
import { PLUGIN_REACT, PLUGIN_TS } from '../plugins'
import { RULE_TS_BASE, RULE_TS_STYLE, RULE_TS_TYPE_AWARE } from '../rules'
import { defineConfigs, find, isPlainObject, isTrue, overrideConfigs } from '../utils'
import { javascript } from './javascript'

type TypeAwareOptions = {
  tsConfigPath?: string,
  tsConfigRootDir?: string
}

export type TypeScriptConfigOptions = {
  tsx?: boolean,
  style?: boolean,
  typeAware?: boolean | TypeAwareOptions
}

export function typescript(options: TypeScriptConfigOptions = {}) {
  const {
    tsx = true,
    style = true,
    typeAware = true
  } = options

  const isTsxEnabled = isTrue(tsx)
  const isStyleEnabled = isTrue(style)
  const isTypeAwareEnabled = isTrue(typeAware) || isPlainObject(typeAware)

  const {
    tsConfigPath = 'tsconfig.json',
    tsConfigRootDir = cwd()
  } = isPlainObject(typeAware) ? typeAware : {}

  if (isTypeAwareEnabled && !find(tsConfigPath, { cwd: tsConfigRootDir })) {
    throw new Error(`Type-aware linting is enabled, but the TypeScript configuration file could not be found at path: ${join(tsConfigRootDir, tsConfigPath)}`)
  }

  const javascriptConfigs = javascript({
    jsx: isTsxEnabled,
    style: isStyleEnabled
  })

  const files = isTsxEnabled ? [GLOB_TS_MTS, GLOB_TSX_MTSX] : [GLOB_TS_MTS]

  return defineConfigs([
    ...overrideConfigs(javascriptConfigs, {
      base: {
        name: 'base',
        files,
        languageOptions: (original) => ({
          ...original,
          parser: PARSER_TS
        }),
        plugins: (original) => ({
          ...original,
          [PLUGIN_TS.meta.name]: PLUGIN_TS
        }),
        rules: (original) => ({
          ...original,
          ...RULE_TS_BASE
        })
      },
      jsx: {
        name: 'tsx',
        files: [GLOB_TSX_MTSX]
      },
      style: {
        name: 'style',
        files,
        rules: (original) => ({
          ...original,
          ...RULE_TS_STYLE
        })
      }
    }, 'javascript'),
    isTypeAwareEnabled
      ? {
          name: 'type-aware',
          files,
          ignores: [GLOB_MARKDOWN_CODE_BLOCKS],
          languageOptions: {
            parserOptions: {
              projectService: {
                defaultProject: tsConfigPath,
                allowDefaultProject: ['*.js']
              },
              tsconfigRootDir: tsConfigRootDir
            }
          },
          plugins: {
            [PLUGIN_REACT.meta.name]: PLUGIN_REACT
          },
          rules: {
            ...RULE_TS_TYPE_AWARE
          }
        }
      : {}
  ], 'typescript')
}
