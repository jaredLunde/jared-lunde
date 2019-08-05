import React from 'react'
import {Helmet} from 'react-helmet-async'
import {css, Text, Box} from 'curls'
import {Hero, Footer} from '~/ui'


export default function Error () {
  return (
    <>
      <Helmet>
        <title>404: Not found</title>
        <meta name='robots' content='noindex'/>
      </Helmet>

      <Hero m='0'>
        <Box kind='row' wrap='no' justify='center' align='center'>
          <Text ultraHeavy color='secondaryText' size='xl'>
            404
          </Text>

          <Text
            d='block'
            maxW={596}
            m='l3'
            p='l3'
            bc='secondaryText'
            bw='l1'
            color='secondaryText'
            css={css`line-height: 1.1;`}
            size='xl'
          >
            Not found
          </Text>
        </Box>
      </Hero>

      <Footer withCallToAction={false}/>
    </>
  )
}
