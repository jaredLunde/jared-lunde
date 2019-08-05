import React from 'react'
import {A, Box, Text, Button} from 'curls'
import {Content} from '@stellar-apps/content'
import * as urls from '~/urls'
import {heroCss} from './Hero'
import {IconLinks} from './Header'


const Footer = ({withCallToAction = true}) => (
  <Box as='footer' kind='row' pos='relative' css={heroCss}>
    <Box flex column bg='translucentDark' w='100%'>
      {withCallToAction === true && (
        <Content p='x4 y5'>
          <Text
            as='div'
            center
            flex
            column
            align='center'
            size='xl@tablet lg@phone'
            color='secondaryText'
          >
            Want to hear more?

            <Button
              as='a'
              kind='solid'
              m='t3'
              size='md'
              aria-label='Click here to contact Jared Lunde'
              href='mailto:jared@BeStellar.co'
            >
              Let's meet
            </Button>
          </Text>
        </Content>
      )}

      <Text as='div' center flex column bg='background' color='primaryText' p='4'>
        <Text m='b3' size='xs'>
          <A kind='a' href={urls.gitHubRepo('jared-lunde')}>This website</A> was fashioned
          with <A kind='a' href={urls.gitHubRepo('curls')}>
            Curls
          </A>
          {' '}and <A kind='a' href={urls.gitHubRepo('style-hooks')}>
            Style Hooks
          </A>
        </Text>

        <IconLinks size='lg' color='primaryText'/>
      </Text>
    </Box>
  </Box>
)

export default Footer