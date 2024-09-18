import markdown from '@eslint/markdown'
import react from '@eslint-react/eslint-plugin'
import html from '@html-eslint/eslint-plugin'
import stylistic from '@stylistic/eslint-plugin'
import typescript from '@typescript-eslint/eslint-plugin'
import importX from 'eslint-plugin-import-x'
import jsonc from 'eslint-plugin-jsonc'
import perfectionist from 'eslint-plugin-perfectionist'
import unicorn from 'eslint-plugin-unicorn'
import { renamePlugin } from './utils'

export const PLUGIN_MARKDOWN = renamePlugin(markdown, 'markdown')

export const PLUGIN_REACT = renamePlugin(react, 'react')

export const PLUGIN_HTML = renamePlugin(html, 'html')

export const PLUGIN_STYLISTIC = renamePlugin(stylistic, 'stylistic')

export const PLUGIN_TS = renamePlugin(typescript, 'ts')

export const PLUGIN_IMPORT = renamePlugin(importX, 'import')

export const PLUGIN_JSON = renamePlugin(jsonc, 'json')

export const PLUGIN_SORT = renamePlugin(perfectionist, 'sort')

export const PLUGIN_UNICORN = renamePlugin(unicorn, 'unicorn')
