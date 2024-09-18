import { readFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { cwd } from 'node:process'
import { defineConfigs, find, findUp, isArray, isEmptyArray, isNonEmptyString } from '../utils'

function convertIgnorePatternToMinimatch(pattern: string) {
  const isNegated = pattern.startsWith('!')
  const negatedPrefix = isNegated ? '!' : ''
  const patternToTest = (isNegated ? pattern.slice(1) : pattern).trimEnd()

  // special cases
  if (['', '**', '**/', '/**'].includes(patternToTest)) {
    return `${negatedPrefix}${patternToTest}`
  }

  const firstIndexOfSlash = patternToTest.indexOf('/')

  const matchEverywherePrefix = firstIndexOfSlash < 0 || firstIndexOfSlash === patternToTest.length - 1
    ? '**/'
    : ''

  const patternWithoutLeadingSlash = firstIndexOfSlash === 0 ? patternToTest.slice(1) : patternToTest

  const escapedPatternWithoutLeadingSlash = patternWithoutLeadingSlash.replaceAll(
    /(?=((?:\\.|[^{(])*))\1([{(])/guy,
    String.raw`$1\$2`
  )

  const matchInsideSuffix = patternToTest.endsWith('/**') ? '/*' : ''

  return `${negatedPrefix}${matchEverywherePrefix}${escapedPatternWithoutLeadingSlash}${matchInsideSuffix}`
}

function relativeMinimatch(pattern: string, relativePath: string, currentDir: string) {
  // if gitignore is in the current directory leave it as is
  if (['', '.', '/'].includes(relativePath)) {
    return pattern
  }

  const negated = pattern.startsWith('!') ? '!' : ''
  let cleanPattern = negated ? pattern.slice(1) : pattern

  if (!relativePath.endsWith('/')) {
    relativePath = `${relativePath}/`
  }

  const isParent = relativePath.startsWith('..')

  // child directories need to just add path in start
  if (!isParent) {
    return `${negated}${relativePath}${cleanPattern}`
  }

  // uncle directories don't make sence
  if (!/^(\.\.\/)+$/.test(relativePath)) {
    throw new Error('The ignore file location should be either a parent or child directory')
  }

  // if it has ** depth it may be left as is
  if (cleanPattern.startsWith('**')) {
    return pattern
  }

  // if glob doesn't match the parent dirs it should be ignored
  const parents = relative(resolve(currentDir, relativePath), currentDir).split(/[/\\]/)

  while (parents.length > 0 && parents[0] && cleanPattern.startsWith(`${parents[0]}/`)) {
    cleanPattern = cleanPattern.slice(parents[0].length + 1)
    parents.shift()
  }

  // if it has ** depth it may be left as is
  if (cleanPattern.startsWith('**')) {
    return `${negated}${cleanPattern}`
  }

  // if all parents are out, it's clean
  if (parents.length === 0) {
    return `${negated}${cleanPattern}`
  }

  // otherwise it doesn't matches the current folder
  return undefined
}

function resolveFilePaths(filePaths: string | string[]): string[] {
  if (isEmptyArray(filePaths)) {
    return ['.gitignore']
  }

  return isArray(filePaths) ? filePaths : [filePaths]
}

export type GitIgnoreConfigOptions = {
  filePaths?: string | string[],
  rootDir?: string
}

export function gitignore(options: GitIgnoreConfigOptions = {}) {
  const {
    filePaths = [],
    rootDir = cwd()
  } = options

  const resolvedFilePaths = resolveFilePaths(filePaths)
  const shouldFindUpward = isEmptyArray(filePaths)

  const ignores = []

  for (const filePath of resolvedFilePaths) {
    const foundPath = shouldFindUpward ? findUp(filePath, { cwd: rootDir }) : find(filePath, { cwd: rootDir })

    if (!foundPath) {
      throw shouldFindUpward
        ? new Error(`The .gitignore file could not be found by searching upward from the directory: ${rootDir}`)
        : new Error(`The gitignore file could not be found at the specified path: ${join(rootDir, filePath)}`)
    }

    const relativePath = relative(rootDir, dirname(filePath)).replaceAll('\\', '/')

    const globs = (
      readFileSync(foundPath, 'utf8')
        .split(/\r?\n/u)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#'))
        .map((line) => convertIgnorePatternToMinimatch(line))
        .map((glob) => relativeMinimatch(glob, relativePath, rootDir))
        .filter((glob) => isNonEmptyString(glob))
    )

    ignores.push(...globs)
  }

  return defineConfigs([
    {
      name: 'base',
      ignores
    }
  ], 'gitignore')
}
