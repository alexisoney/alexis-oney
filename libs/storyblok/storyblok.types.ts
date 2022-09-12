import {ComponentProps} from 'react'

import {BlogCategory} from '@/app/blocks/BlogCategory'
import {BlogPost} from '@/app/blocks/BlogPost'
import {Footer} from '@/app/blocks/Footer'
import {GlobalComponent} from '@/app/blocks/GlobalComponent'
import {Navigation} from '@/app/blocks/Navigation'
import {AuthorStory} from '@/app/content-types/author'
import {BlogStory} from '@/app/content-types/blog/Blog'
import {CategoryStory} from '@/app/content-types/category'
import {ConfigStory} from '@/app/content-types/config'
import {GlobalStory} from '@/app/content-types/global'
import {LayoutStory} from '@/app/content-types/layout'
import {PageStory} from '@/app/content-types/page/Page'

export type StoryblokStory =
  | AuthorStory
  | BlogStory
  | CategoryStory
  | ConfigStory
  | GlobalStory
  | LayoutStory
  | PageStory

export type StoryblokBlock =
  | BlogCategory
  | BlogPost
  | ComponentProps<typeof Footer>
  | ComponentProps<typeof GlobalComponent>
  | ComponentProps<typeof Navigation>
