import React from 'react'
import Helmet from 'react-helmet'
import {BreakPoint, Row, H1, H2, Box, Link} from 'curls'
import {Icon} from '@jaredlunde/curls-addons'
import {getDefaultBreakPoints} from 'shared/utils'
import {ResumePage} from '~/@routes/Resume'
import {resume} from '~/sitemap'
import {assets} from '~/config'
import {Hero, Content, Cover, Header, Menu, SideBar} from '~/ui'


export const bgSrcSet = [
  {
    src: require('~/public/images/rocky-mountains-colorado.jpg'),
    mime: 'image/jpeg',
    width: 1284,
    height: 673
  },
  {
    src: require('~/public/images/rocky-mountains-colorado.webp'),
    mime: 'image/webm',
    width: 1284,
    height: 673
  },
  {
    src: require('~/public/images/rocky-mountains-colorado--sm.jpg'),
    mime: 'image/jpeg',
    width: 600,
    height: 314
  },
  {
    src: require('~/public/images/rocky-mountains-colorado--sm.webp'),
    mime: 'image/webm',
    width: 600,
    height: 314
  },
]

export default class Home extends React.PureComponent {
  render () {
    return (
      <Hero p={0} ov='hidden' bg='darkestGrey'>
        <Helmet>
          <title>Jared Lunde -  💻 ⚛️🎨🧘</title>
          <meta
            name='description'
            content='Jared Lunde is a fullstack developer in Denver, Colorado specializing in serverless universal React applications.'
          />
          <link rel='canonical' href='https://jaredlunde.com/'/>
        </Helmet>

        <BreakPoint sm defaultMatches={getDefaultBreakPoints('sm')}>
          {({matches}) => (
            <Row h='100%' data-strict>
              {matches.sm === true && (
                <Header/>
              )}
              {matches.sm === false && (
                <SideBar>
                  <Row column p='3 y4' align='center' data-autosize>
                    <H1 xs m='b4' face='secondary'>
                      JARED LUNDE
                    </H1>

                    <Box
                      align='center'
                      br={1}
                      w={80}
                      h={80}
                      ov='hidden'
                      data-strict
                    >
                      <img
                        src={require('~/public/images/profile.jpg')}
                        width={80}
                        alt='Photo of Jared Lunde'
                      />
                    </Box>
                  </Row>

                  <Menu isVisible/>
                </SideBar>
              )}

              <Box flex fluid pos='relative' align='center' justify='center' h='100%' data-autosize>
                <Cover
                  srcset={bgSrcSet}
                  alt={
                    `A picture of Colorado's Rocky Mountain National Park ` +
                    `taken by Jared Lunde.`
                  }
                />

                <Box
                  flex
                  column
                  w='100%'
                  p='3'
                  align='center'
                  maxW='456'
                  z={1000}
                  data-autosize
                >
                  <H2
                    md
                    ultraHeavy
                    center
                    d='block'
                    w='100%'
                  >
                    {matches.sm ? (
                      <>
                        I'm a software engineer<br/>
                        in Denver specializing in<br/>
                        serverless React and React<br/>
                        Native applications
                      </>
                    ) : (
                      <>
                        I'm a software engineer in Denver<br/>
                        specializing in serverless React and <br/>
                        React Native applications
                      </>
                    )}
                  </H2>

                  <Link
                    xs
                    heavy
                    flex
                    to={resume()}
                    align='center'
                    justify='center'
                    color='white'
                    p='y3'
                    m='t4'
                    bc='white'
                    bw='1'
                    br='1'
                    w={196}
                    face='secondary'
                    onMouseEnter={ResumePage.load}
                  >
                    <Icon
                      name='paper'
                      size={16}
                      m='r2'
                      pos='relative'
                    />

                    <Box nodeType='span' pos='relative' style={{top: 2}}>
                      VIEW RESUME
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Row>
          )}
        </BreakPoint>
      </Hero>
    )
  }
}
