import {StoryblokAsset} from '@alexisoney/storyblok-to-nextjs'
import classNames from 'classnames'
import {ReactNode, useEffect, useState} from 'react'

import {PAGE_TRANSITION_ENTERING_DURATION} from '../../config'
import Image from '../Image'
import styles from './PageTransition.module.scss'

interface PageTransition {
  logo?: StoryblokAsset
  children: ReactNode & {props: {full_slug: string}}
}

type Transitions = 'isExiting' | 'isEntering' | 'isEntered'

const PageTransition = ({children, logo}: PageTransition): JSX.Element => {
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState<Transitions>('isEntered')

  useEffect(() => {
    if (children.props.full_slug !== displayChildren.props.full_slug) {
      setTransitionStage('isExiting')
    }
  }, [children, setDisplayChildren, displayChildren])

  return (
    <>
      <div
        onTransitionEnd={() => {
          if (transitionStage === 'isExiting') {
            setDisplayChildren(children)
            setTransitionStage('isEntering')
          } else {
            setTransitionStage('isEntered')
          }
        }}
        className={classNames(styles.overlay, styles[transitionStage])}
        style={{['--entering-duration' as string]: `${PAGE_TRANSITION_ENTERING_DURATION / 1000}s`}}
      >
        {logo && logo.filename && (
          <Image className={styles.logo} src={logo.filename} alt={logo.alt} />
        )}
      </div>
      {displayChildren}
    </>
  )
}

export default PageTransition
