import {StoryblokAsset, StoryblokLink} from '@alexisoney/storyblok-to-nextjs'
import {capitalize, random} from 'lodash'
import {LoremIpsum} from 'lorem-ipsum'
import {v4 as uuid} from 'uuid'

export const lorem = new LoremIpsum()

export const generateUid = uuid

export const generateArray = (min: number, max?: number) =>
  Array.from(Array(random(min, max || min)))

export const generateTag = (): keyof JSX.IntrinsicElements =>
  ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'][random(0, 6)] as keyof JSX.IntrinsicElements

export const generateHeading = (size?: number) =>
  capitalize(lorem.generateWords(size || random(3, 6)))

export const generateParagraph = (length?: number): string =>
  lorem.generateSentences(length || random(2, 5))

export const generateSentence = (): string => capitalize(lorem.generateWords(random(5, 10)))

export const generateLabel = () => capitalize(lorem.generateWords(random(2, 3)))

export const generateInternalLink = (): StoryblokLink => ({
  linktype: 'story',
  story: {
    url: 'my-link',
  },
})
export const generateExternalLink = (): StoryblokLink => ({
  linktype: 'url',
  url: 'https://www.pelostud.io',
})

export const generateAsset = (asset = 'image'): StoryblokAsset => {
  let filename = ''

  switch (asset) {
    case 'image':
      filename += 'image.jpeg'
      break
  }

  return {filename}
}
