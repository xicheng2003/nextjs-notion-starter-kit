import * as React from 'react'

import { Block, ExtendedRecordMap } from 'notion-types'

import { getPageTweet } from '@/lib/get-page-tweet'

import { PageActions } from './PageActions'
import { PageSocial } from './PageSocial'
import { Waline } from './Comment'

export const PageAside: React.FC<{
  block: Block
  recordMap: ExtendedRecordMap
  isBlogPost: boolean
}> = ({ block, recordMap, isBlogPost }) => {
  if (!block) {
    return null
  }

  // only display comments and page actions on blog post pages
  if (isBlogPost) {
    const tweet = getPageTweet(block, recordMap)
    if (!tweet) {
      return null
    }

    return <PageActions tweet={tweet} />
  }

  return <PageSocial />
}
      {block.id.replace(/-/g, '') !== site.rootNotionPageId ?
        <Waline
          serverURL='https://waline.morlight.top'
          path={'/' + block.id.replace(/-/g, '')}
          emoji={[
            '//cdn.jsdelivr.net/gh/walinejs/emojis@1.1.0/tw-emoji'
          ]}
          dark={isDarkMode}
          meta={['nick', 'mail']}
          requiredMeta={['nick', 'mail']}
          imageUploader={false}
          copyright={false}
        /> : null}
