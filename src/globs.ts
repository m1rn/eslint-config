export const GLOB_JS_CJS = '**/*.?(c)js'
export const GLOB_JS_MJS = '**/*.?(m)js'
export const GLOB_JS = '**/*.?(c|m)js'

export const GLOB_JSX_CJSX = '**/*.?(c)jsx'
export const GLOB_JSX_MJSX = '**/*.?(m)jsx'
export const GLOB_JSX = '**/*.?(c|m)jsx'

export const GLOB_TS_CTS = '**/*.?(c)ts'
export const GLOB_TS_MTS = '**/*.?(m)ts'
export const GLOB_TS = '**/*.?(c|m)ts'

export const GLOB_TSX_CTSX = '**/*.?(c)tsx'
export const GLOB_TSX_MTSX = '**/*.?(m)tsx'
export const GLOB_TSX = '**/*.?([cm])tsx'

export const GLOB_MARKDOWN = '**/*.md'
export const GLOB_MARKDOWN_CODE_BLOCKS = `${GLOB_MARKDOWN}/**`

export const GLOB_JSON = '**/*.json'
export const GLOB_JSONC = '**/*.jsonc'
export const GLOB_JSON5 = '**/*.json5'

export const GLOB_HTML = '**/*.html'

export const GLOB_IGNORES = [
  '**/.*',
  '**/*.min.*',
  '**/package-lock.json',
  '**/bun.lockb',
  '**/pnpm-lock.yaml',
  '**/yarn.lock',
  '**/dist/',
  '**/build/',
  '**/output/',
  '**/out/',
  '**/coverage/',
  '**/temp/',
  '**/cache/',
  '**/node_modules/'
]
