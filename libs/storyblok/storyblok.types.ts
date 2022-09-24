import {ComponentProps} from 'react'

import {BlogCategory} from '@/src/blocks/BlogCategory'
import {Footer} from '@/src/blocks/Footer'
import {GlobalComponent} from '@/src/blocks/GlobalComponent'
import {Navigation} from '@/src/blocks/Navigation'
import {AuthorStory} from '@/src/content-types/author'
import {BlogStory} from '@/src/content-types/blog/Blog'
import {CategoryStory} from '@/src/content-types/category'
import {ConfigStory} from '@/src/content-types/config'
import {GlobalStory} from '@/src/content-types/global'
import {LayoutStory} from '@/src/content-types/layout'
import {PageStory} from '@/src/content-types/page/Page'

export type CustomStory =
  | AuthorStory
  | BlogStory
  | CategoryStory
  | ConfigStory
  | GlobalStory
  | LayoutStory
  | PageStory

export type CustomBlock =
  | BlogCategory
  | ComponentProps<typeof Footer>
  | ComponentProps<typeof GlobalComponent>
  | ComponentProps<typeof Navigation>
