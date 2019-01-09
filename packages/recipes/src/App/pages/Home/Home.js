import React from 'react'
import Helmet from 'react-helmet'
import {Type, Box, BreakPoint} from 'curls'
import Broker from 'react-broker'
import Hero from '@stellar-apps/viewport-hero'
import {Content, ShadowType, RotateType} from '~/ui'
import HeroImage from '~/public/images/hero.jpg?quality=95&sizes[]=300&sizes[]=400&sizes[]=600&sizes[]=800&sizes[]=1360'
import {TypeButton, IconButton} from '@stellar-apps/buttons'


export default class Home extends React.PureComponent {
  render () {
    const {match: {params: {slug}}} = this.props
    const Post = Broker(
      {
        [`../../recipes/${slug}.mdx`]: () => import(
          /* webpackChunkName: "recipes/[request]" */
          `../../recipes/${slug}.mdx`
        )
      }
    )

    return (
      <Box>
        <Helmet>
          <title>Hello World</title>
        </Helmet>

        <Hero column ov='hidden' bg='primaryText' pos='relative'>
          <BreakPoint sm>
            {({matches}) => (
              <ShadowType
                nodeType='div'
                flex
                column
                m='b4'
                pos='absolute'
                color='white'
                p={matches.sm ? 'x4 y6' : 6}
                z='1000'
                l='0'
                r='0'
                b='0'
                t='0'
                align='center'
                justify='center'
                css='line-height: 1.0;'
              >
                <RotateType
                  as={ShadowType}
                  flex
                  column
                  color='currentColor'
                  nodeType='h1'
                  xxl={!matches.sm}
                  xl={matches.sm}
                  align='center'
                >
                  delicioso
                  <RotateType
                    center
                    delay={5000}
                    md={matches.sm}
                    lg={!matches.sm}
                    color='white'
                    pos='relative'
                    t={matches.sm ? -4 : -8}
                  >
                    อร่อย 美味的 स्वादिष्ट
                  </RotateType>
                </RotateType>
              </ShadowType>
            )}
          </BreakPoint>

          <Box h='100vh' ov='hidden'>
            <Box
              nodeType='img'
              minH='100vh'
              src={HeroImage.src}
              srcSet={HeroImage.srcSet}
              css='opacity: 0.8;'
            />
          </Box>
        </Hero>

        <Content tight p='y6'>
          <Type w='100%' d='block'>
            <Post/>
          </Type>
        </Content>
      </Box>
    )
  }
}
