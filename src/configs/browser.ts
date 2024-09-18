import { GLOBALS_BROWSER } from '../globals'
import { defineConfigs } from '../utils'

export function browser() {
  return defineConfigs([
    {
      name: 'base',
      languageOptions: {
        globals: {
          ...GLOBALS_BROWSER
        }
      }
    }
  ], 'browser')
}
