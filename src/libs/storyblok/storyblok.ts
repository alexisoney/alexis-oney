import {StoryblokToNextJS} from '@alexisoney/storyblok-to-nextjs'

import {LOCALES} from '@/src/config'

const Storyblok = new StoryblokToNextJS({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  version: process.env.STORYBLOK_VERSION,
  languages: LOCALES,
})

export default Storyblok
