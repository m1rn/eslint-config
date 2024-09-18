import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors'
import { GLOB_MARKDOWN, GLOB_MARKDOWN_CODE_BLOCKS } from '../globs'
import { PLUGIN_MARKDOWN } from '../plugins'
import { RULE_MARKDOWN_BASE, RULE_MARKDOWN_CODE_BLOCKS } from '../rules'
import { defineConfigs, isTrue } from '../utils'

export type MarkdownConfigOptions = {
  codeBlocks?: boolean
}

export function markdown(options: MarkdownConfigOptions = {}) {
  const { codeBlocks = true } = options

  const isCodeBlocksEnabled = isTrue(codeBlocks)

  return defineConfigs([
    {
      name: 'base',
      files: [GLOB_MARKDOWN],
      plugins: {
        [PLUGIN_MARKDOWN.meta.name]: PLUGIN_MARKDOWN
      },
      rules: {
        ...RULE_MARKDOWN_BASE
      },
      language: `${PLUGIN_MARKDOWN.meta.name}/commonmark`,
      processor: mergeProcessors([
        processorPassThrough,
        PLUGIN_MARKDOWN.processors?.['markdown'] ?? {}
      ])
    },
    isCodeBlocksEnabled
      ? {
          name: 'code-blocks',
          files: [GLOB_MARKDOWN_CODE_BLOCKS],
          rules: {
            ...RULE_MARKDOWN_CODE_BLOCKS
          }
        }
      : {}
  ], 'markdown')
}
