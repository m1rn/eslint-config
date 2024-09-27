import type { ESLint, Linter } from 'eslint'

export type AnyRecord = Record<PropertyKey, any>

export type AnyArray = any[]

export type AnyFunction = (...args: any[]) => any

export type Simplify<Type> = {
  [Key in keyof Type]: Type[Key]
} & {}

export type ESLintConfig = Omit<Linter.Config, 'plugins'> & {
  plugins?: Record<string, any>,
  language?: string
}

/**
 * This type definition is created to resolve a TypeScript build issue (TS2742),
 * where the inferred type of a value cannot be named without a reference to
 * specific package paths like '.pnpm/@eslint+core@0.6.0/node_modules/@eslint/core'.
 *
 * The issue occurs during the build process, as described in this GitHub issue:
 * https://github.com/microsoft/TypeScript/issues/47663
 *
 * By explicitly defining the plugin types (instead of relying on inference),
 * we avoid TypeScript trying to include complex and non-portable path references
 * that lead to build failures.
 *
 * This type ensures that the ESLint plugin components are properly annotated
 * to avoid such issues during package builds.
 */
export type ESLintPlugin = {
  meta?: ESLint.Plugin['meta'],
  configs?: ESLint.Plugin['configs'],
  environments?: ESLint.Plugin['environments'],
  languages?: ESLint.Plugin['languages'],
  processors?: ESLint.Plugin['processors'],
  rules?: ESLint.Plugin['rules']
}
