/* eslint-disable @typescript-eslint/no-var-requires */

// Inspired by
// https://levelup.gitconnected.com/how-to-generate-react-components-from-your-terminal-a27741a5b862

const fs = require('fs')
const path = require('path')
const {exec} = require('child_process')
const _ = require('lodash')
const {mocks, component, story, barrel} = require('./component-templates.js')

// grab component name from terminal argument
const [rawName] = process.argv.slice(2)
const name = _.upperFirst(_.camelCase(rawName))
if (!name) throw new Error('You must include a component name.')

const componentsDir = './app/blocks'

if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir)

const dir = path.resolve(componentsDir, name)

// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.')

// create the folder
fs.mkdirSync(dir)

function writeFileErrorHandler(err) {
  if (err) throw err
}

fs.writeFile(`${dir}/${name}.mocks.ts`, mocks(name), writeFileErrorHandler)
fs.writeFile(`${dir}/${name}.stories.tsx`, story(name), writeFileErrorHandler)
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler)
fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler)

const typesPath = './libs/storyblok/storyblok.types.ts'
const types = fs.readFileSync(typesPath, 'utf8')
;(function addToBlok(parts) {
  const list = parts[2]
    .replace(/\s/g, '')
    .split('|')
    .concat(name)
    .filter((c) => c !== '}')
    .sort()
    .join('|')

  fs.writeFile(
    typesPath,
    `import {${name}} from '@/app/blocks/${name}'\n${parts[0]}${parts[1]}${list}`,
    writeFileErrorHandler
  )
})(types.split(/(export type StoryblokBlock =)/))

const enumsPath = './libs/storyblok/storyblok.enums.ts'
const enums = fs.readFileSync(enumsPath, 'utf8')
;(function addToEnums(parts) {
  const list = parts[2]
    .replace(/\s/g, '')
    .split(',')
    .concat(`${_.snakeCase(name).toUpperCase()} = '${_.kebabCase(name)}'`)
    .filter((c) => c !== '}')
    .sort()
    .join(',')
  fs.writeFile(enumsPath, [parts[0], parts[1], list, '}'].join(''), writeFileErrorHandler)
})(enums.split(/(export enum blocks {)/))

exec('npx eslint libs/storyblok --fix && npx prettier -w libs/storyblok')
