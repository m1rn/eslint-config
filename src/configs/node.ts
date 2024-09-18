import { GLOBALS_NODE_ESM } from '../globals'
import { PLUGIN_UNICORN } from '../plugins'
import { RULE_NODE_BASE } from '../rules'
import { defineConfigs } from '../utils'

export function node() {
  return defineConfigs([
    {
      name: 'base',
      languageOptions: {
        globals: {
          ...GLOBALS_NODE_ESM
        }
      },
      plugins: {
        [PLUGIN_UNICORN.meta.name]: PLUGIN_UNICORN
      },
      rules: {
        ...RULE_NODE_BASE
      }
    }
  ], 'node')
}
