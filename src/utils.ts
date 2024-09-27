import { accessSync, statSync } from 'node:fs'
import type { PathLike } from 'node:fs'
import { dirname, join } from 'node:path'
import { cwd } from 'node:process'
import { fileURLToPath } from 'node:url'
import type { Linter } from 'eslint'
import { name as pkgName } from '../package.json'
import type { AnyArray, AnyFunction, AnyRecord, ESLintConfig, ESLintPlugin, Simplify } from './types'

export function isString(source: unknown): source is string {
  return typeof source === 'string'
}

export function isNonEmptyString(source: unknown): source is string {
  return isString(source) && source.length > 0
}

export function isTrue(source: unknown): source is true {
  return source === true
}

export function isFalse(source: unknown): source is false {
  return source === false
}

export function isBoolean(source: unknown): source is boolean {
  return isTrue(source) || isFalse(source)
}

export function isArray(source: unknown): source is AnyArray {
  return Array.isArray(source)
}

export function isEmptyArray(source: unknown): source is [] {
  return isArray(source) && source.length === 0
}

export function isFunction(source: unknown): source is AnyFunction {
  return typeof source === 'function'
}

export function isUndefined(source: unknown): source is undefined {
  return typeof source === 'undefined'
}

export function isPlainObject(source: unknown): source is AnyRecord {
  if (typeof source !== 'object' || source === null) {
    return false
  }

  const prototype = Object.getPrototypeOf(source)

  const isPlainPrototype = prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null

  const hasSpecialSymbols = Symbol.toStringTag in source || Symbol.iterator in source

  return isPlainPrototype && !hasSpecialSymbols
}

export type MergeStrategy = (
  mergeContext: {
    isSourceKey: boolean,
    isTargetKey: boolean,
    key: string,
    sourceValue: unknown,
    targetValue: unknown
  }
) => unknown

export function createCustomizeMerger<
  Target extends AnyRecord = AnyRecord,
  Source extends AnyRecord = AnyRecord,
  Result extends AnyRecord = AnyRecord
>(mergeStrategy: MergeStrategy) {
  return (target: Target, source: Source): Result => {
    const result: AnyRecord = { ...target }

    const targetKeys = new Set(Object.keys(target))
    const sourceKeys = new Set(Object.keys(source))
    const allKeys = new Set([...targetKeys, ...sourceKeys])

    for (const key of allKeys) {
      const targetValue = target[key]
      const sourceValue = source[key]
      const isTargetKey = targetKeys.has(key)
      const isSourceKey = sourceKeys.has(key)

      result[key] = mergeStrategy({ isSourceKey, isTargetKey, key, sourceValue, targetValue })
    }

    return result
  }
}

const handleDeepMerge: ReturnType<typeof createCustomizeMerger> = createCustomizeMerger(
  ({ isSourceKey, sourceValue, targetValue }) => {
    if (!isSourceKey) {
      return targetValue
    }

    return isPlainObject(targetValue) && isPlainObject(sourceValue)
      ? handleDeepMerge(targetValue, sourceValue)
      : sourceValue
  }
)

export type DeepMerge<Target extends AnyRecord, Source extends AnyRecord> = Simplify<(
  {
    [Key in keyof Target as Key extends keyof Source ? never : Key]: Target[Key]
  } &
  {
    [Key in keyof Target as Key extends keyof Source ? Key : never]-?: (
      [Target[Key], Source[Key]] extends [AnyRecord, AnyRecord]
        ? DeepMerge<Target[Key], Source[Key]>
        : Source[Key]
    )
  } &
  {
    [Key in keyof Source as Key extends keyof Target ? never : Key]: Source[Key]
  }
)>

export function deepMerge<
  Target extends AnyRecord,
  Source extends AnyRecord
>(
  target: Target,
  source: Source
): DeepMerge<Target, Source> {
  return handleDeepMerge(target, source) as DeepMerge<Target, Source>
}

const handleOverrides = createCustomizeMerger(
  ({ isSourceKey, sourceValue, targetValue }) => {
    if (!isSourceKey) {
      return targetValue
    }

    return isFunction(sourceValue) ? sourceValue(targetValue) : sourceValue
  }
)

export type Defaults<Source, DefaultValue> = (
  Source extends undefined
    ? DefaultValue
    : Source extends AnyRecord
      ? DefaultValue extends AnyRecord
        ? {
            [Keys in keyof DefaultValue | keyof Source]: (
              Keys extends keyof DefaultValue
                ? Keys extends keyof Source
                  ? Defaults<Source[Keys], DefaultValue[Keys]>
                  : DefaultValue[Keys]
                : Keys extends keyof Source
                  ? Source[Keys]
                  : never
            )
          }
        : Source
      : Source
)

export function defaults<Source, DefaultValue>(
  source: Source,
  defaultValue: DefaultValue
): Defaults<Source, DefaultValue> {
  if (isPlainObject(source) && isPlainObject(defaultValue)) {
    const entries = Object.entries(defaultValue)

    for (const [key, value] of entries) {
      (source as AnyRecord)[key] = defaults((source as AnyRecord)[key], value)
    }
  }

  return (isUndefined(source) ? defaultValue : source) as Defaults<Source, DefaultValue>
}

export function normalizePathLike(path: PathLike): string {
  if (path instanceof URL) {
    return fileURLToPath(path)
  }

  return path.toString()
}

export function isPathAccessible(path: string, mode?: number) {
  try {
    accessSync(path, mode)

    return true
  } catch {
    return false
  }
}

export type FindOptions = {
  cwd?: string,
  type?: 'directory' | 'file'
}

export function find(
  name: string,
  options: FindOptions = {}
) {
  const { cwd: currentDir = cwd(), type = 'file' } = options

  const fullPath = join(currentDir, name)

  const stats = statSync(fullPath, { throwIfNoEntry: false })

  return stats && ((type === 'file' && stats.isFile()) || (type === 'directory' && stats.isDirectory()))
    ? fullPath
    : undefined
}

export type FindUpOptions = FindOptions & {
  stopAt?: string
}

export function findUp(name: string, options: FindUpOptions = {}) {
  let currentDir = options.cwd ?? cwd()

  const { stopAt } = options

  while (currentDir !== stopAt && dirname(currentDir) !== currentDir) {
    const result = find(name, { ...options, cwd: currentDir })

    if (isString(result)) {
      return result
    }

    currentDir = dirname(currentDir)
  }

  return undefined
}

export function isPackageExists(name: string) {
  return !!find(join('node_modules', name, 'package.json'))
}

export function defineConfigs(configs: ESLintConfig[], scoped?: string): ESLintConfig[] {
  return configs
    .filter((config) => config && Object.keys(config).length > 0)
    .map((config) => {
      if (isNonEmptyString(config.name) && isNonEmptyString(scoped)) {
        config.name = `${pkgName}/${scoped}/${config.name}`
      }

      return config
    })
}

export function renamePlugin<Rename extends string>(
  plugin: AnyRecord,
  rename: Rename
) {
  return deepMerge(plugin as ESLintPlugin, {
    meta: {
      name: rename
    }
  })
}

export type DefineRules<
  Rules extends Linter.RulesRecord,
  Scoped extends string | undefined
> = (
  Rules extends AnyRecord
    ? Scoped extends string
      ? {
          [Keys in keyof Rules as (
            Keys extends number | string
              ? `${Scoped}/${Keys}`
              : Keys
          )]: Rules[Keys]
        }
      : Rules
    : never
)

export function defineRules<
  Rules extends Linter.RulesRecord,
  Scoped extends string | undefined = undefined
>(
  rules: Rules,
  scoped?: Scoped
): DefineRules<Rules, Scoped> {
  return (
    isNonEmptyString(scoped)
      ? Object.fromEntries(Object.entries(rules).map(([key, value]) => [`${scoped}/${key}`, value]))
      : rules
  ) as DefineRules<Rules, Scoped>
}

export function applyConfig(
  configFunction: (...args: any[]) => ESLintConfig[],
  configOptions: AnyRecord | boolean
) {
  if (isTrue(configOptions)) {
    return configFunction()
  }

  if (isPlainObject(configOptions)) {
    return configFunction(configOptions)
  }

  return []
}

export function isOptionEnabled(option: unknown) {
  return isTrue(option) || isPlainObject(option)
}

export type Overrides = Record<string, {
  [Key in keyof ESLintConfig]: ((originalValue?: ESLintConfig[Key]) => ESLintConfig[Key]) | ESLintConfig[Key]
} | undefined>

export function overrideConfigs(
  configs: ESLintConfig[],
  overrides: Overrides,
  scoped?: string
) {
  const result = [...configs]

  const entries = Object.entries(overrides)

  for (const [name, override] of entries) {
    const index = result.findIndex((config) => {
      if (!isNonEmptyString(config.name)) {
        return false
      }

      return config.name === (isNonEmptyString(scoped) ? `${pkgName}/${scoped}/${name}` : name)
    })

    if (index !== -1 && !isUndefined(result[index])) {
      result[index] = handleOverrides(result[index], override ?? {})
    }
  }

  return result
}

export function addExtraFilesToConfigs(configs: ESLintConfig[], extraFiles: (string | string[])[]) {
  for (const config of configs) {
    const files = new Set([
      ...config.files ?? [],
      ...extraFiles
    ])

    if (files.size > 0) {
      config.files = [...files]
    }
  }
}
