import {GetStaticPropsContext, InferGetStaticPropsType} from 'next'
import {Fragment} from 'react'

import Footer from '@/app/blocks/Footer'
import Navigation from '@/app/blocks/Navigation'
import DynamicComponent from '@/app/utils/DynamicComponent'
import Head from '@/app/utils/Head'
import Storyblok from '@/libs/storyblok/storyblok'
import {blocks} from '@/libs/storyblok/storyblok.enums'
import {ConfigStory, StoryblokBlock, StoryblokStory} from '@/libs/storyblok/storyblok.types'

export const getStaticPaths = Storyblok.getStaticPaths

export const getStaticProps = (params: GetStaticPropsContext) =>
  Storyblok.getStaticProps<StoryblokBlock, StoryblokStory, ConfigStory>(params)

const Page = ({story, layout = []}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (story) {
    return (
      <>
        <Head story={story} />

        <main className='relative'>
          {layout.map((block) =>
            block.component === blocks.NAVIGATION ? (
              <Navigation key={block._uid} {...block} />
            ) : null
          )}

          {(story.content.blocks || []).map((block) => (
            <Fragment key={block._uid}>
              <DynamicComponent block={block} />
            </Fragment>
          ))}

          {layout.map((block) =>
            block.component === blocks.FOOTER ? <Footer key={block._uid} {...block} /> : null
          )}
        </main>
      </>
    )
  }

  return null
}

export default Page
