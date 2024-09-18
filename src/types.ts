import type { Linter } from 'eslint'

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
