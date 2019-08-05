import React from 'react'
import {css, Box} from 'curls'
import {Content} from '@stellar-apps/content'
import {TransitionDrop/*, Icon*/} from '@jaredlunde/curls-addons'
import heroImage from '~/public/images/pattern.png'
import {SkipNavContent} from './SkipNav'
import Header from './Header'


export const heroCss = css`
  background-image: url(${heroImage.src});
  background-size: 960px auto;
  background-position: center;
`

export default ({m = 'b5@desktop b4@phone', children}) => (
  <Box flex bg='black' w='100%' pos='relative' m={m} css={heroCss}>
    <Box
      flex
      column
      bg='translucentDark'
      w='100%'
      minH='100%'
      align='end'
    >
      <TransitionDrop duration='normal' easing='swiftMove' fromTop={-16}>
        {({css}) => <Header css={css}/>}
      </TransitionDrop>

      <Content as='section' flex grow justify='center' align='end' p='4 y6@tablet y5@phone'>
        <SkipNavContent>
          {children}
        </SkipNavContent>
      </Content>

      {/*<Icon name='wave' color='background' w='100%' h='auto' pos='absolute' b='0' l='0' r='0'/>*/}
    </Box>
  </Box>
)