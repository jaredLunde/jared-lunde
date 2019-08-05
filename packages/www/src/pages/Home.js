import React from 'react'
import {Helmet} from 'react-helmet-async'
import {css, Box, Text, Button, Avatar} from 'curls'
import {Icon, TransitionDrop} from '@jaredlunde/curls-addons'
import {Content} from '@stellar-apps/content'
import {Hero, Footer, LinkButton, TransitionText} from '~/ui'
import * as urls from '~/urls'
import {OpenSource} from './Resume'


const introductions = ['Hello,', 'Nǐ hǎo,', 'Salut,', 'Qué tal?', 'Ciao,', 'Selam,']
const RecentProject = ({icon, href, name, children}) => (
  <Box
    as='a'
    href={href}
    grow
    basis='[calc(50% - 16px)]@tablet 100%@phone'
    p='1'
    minW='485@tablet 100%@phone'
  >
    <Box as='span' kind='card' row='@tablet' p='0' h='100%'>
      <Box
        as='span'
        flex
        w='148@tablet auto@phone'
        minW='148@tablet 100%@phone'
        h='240@phone auto@tablet'
        ov='hidden'
        justify='center'
        css={css`background: url(${icon}); background-size: cover; background-position: center;`}
        aria-hidden
      />
      <Box as='span' p='3' grow>
        <Text as='span' kind='h3' d='block'>{name}</Text>
        <Text size='xs'>{children}</Text>
      </Box>
    </Box>
  </Box>
)

const Home = () => (
  <>
    <Helmet>
      <title>Jared Lunde  💻⚛️🎨🧘</title>
      <meta
        name='description'
        content='Jared Lunde is a full stack developer in Denver, Colorado specializing in serverless universal React applications.'
      />
      <link rel='canonical' href={urls.home()}/>
    </Helmet>

    <Hero>
      <Box flex row='@desktop' column='@phone' align='start@desktop center@phone'>
        <Avatar
          src={require('~/public/images/profile.jpeg').src}
          size='lg@desktop md@tablet sm@phone'
          m='b3@phone b4@tablet [t2 b0 r5]@desktop'
          alt='A head shot of Jared Lunde'
        />

        <Text as='div' color='secondaryText'>
          <Text as='h1' center='@phone' left='@desktop'>
            <TransitionText size='xl'>{introductions}</TransitionText>
            <Text kind='hero'>
              I'm a full stack engineer<br/>
              working on serverless<br/>
              React applications
            </Text>
          </Text>

          <Box kind='row' column='@phone' row='@tablet' m='t3@desktop t5@phone' justify='center@phone start@desktop' css={css}>
            <TransitionDrop fromBottom={16} easing='swiftMove'>
              {({css}) => (
                <LinkButton to={urls.resume()} kind='solid' css={css}>
                  ☶ View resume
                </LinkButton>
              )}
            </TransitionDrop>

            <TransitionDrop fromBottom={16} delay={64} easing='swiftMove'>
              {({css}) => (
                <Button as='a' href={urls.gitHub()} m='t2@phone [0 l3]@tablet' css={css}>
                  <Icon name='gitHub' m='r1'/> Find me on GitHub
                </Button>
              )}
            </TransitionDrop>
          </Box>
        </Text>
      </Box>
    </Hero>

    <Content kind='section' p='x3 b5@desktop b4@phone'>
      <Text kind='h2' center>
        Recent projects
      </Text>

      <Box kind='blurbs' align='stretch'>
        <RecentProject
          name='Airwell'
          href='https://airwell.app'
          icon={require('~/public/images/airwell-icon.png').src}
        >
          Try Airwell and be amazed by how much a simple change in your breathing can do
          for your energy, relaxation, sleep, and focus
        </RecentProject>

        <RecentProject
          name='Engrams'
          href='https://engrams.app'
          icon={require('~/public/images/engrams-icon.png').src}
        >
          Engrams uses techniques molded by modern neuroscience to ensure you never forget
          anything you want to learn
        </RecentProject>

        <RecentProject
          name='Style Hooks'
          href='http://style-hooks.jaredlunde.com'
          icon={require('~/public/images/style-hooks-icon.png').src}
        >
          Turn your React function components into responsive components with style props
          using Style Hooks and Emotion
        </RecentProject>

        <RecentProject
          name='Stellar'
          href='https://BeStellar.co'
          icon={require('~/public/images/stellar-icon.png').src}
        >

          Stellar is Denver's premier studio for lead generation, product design, and
          development services
        </RecentProject>
      </Box>
    </Content>

    <OpenSource/>

    <Footer/>
  </>
)

export default Home
