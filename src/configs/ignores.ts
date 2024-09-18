import { GLOB_IGNORES } from '../globs'
import { applyConfig, defineConfigs, isOptionEnabled, overrideConfigs } from '../utils'
import { gitignore } from './gitignore'
import type { GitIgnoreConfigOptions } from './gitignore'

export type IgnoresConfigOptions = {
  gitignore?: boolean | GitIgnoreConfigOptions
}

export function ignores(options: IgnoresConfigOptions = {}) {
  const { gitignore: gitignoreOptions = true } = options

  const isGitignoreEnabled = isOptionEnabled(gitignoreOptions)

  const gitignoreConfigs = applyConfig(gitignore, gitignoreOptions)

  return defineConfigs([
    {
      name: 'base',
      ignores: [...GLOB_IGNORES]
    },
    ...isGitignoreEnabled
      ? overrideConfigs(gitignoreConfigs, {
        base: {
          name: 'gitignore'
        }
      }, 'gitignore')
      : []
  ], 'ignores')
}
