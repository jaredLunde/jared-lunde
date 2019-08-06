import React from 'react'
import {Helmet} from 'react-helmet-async'
import {A, Box, Text, Avatar} from 'curls'
import {Icon} from '@jaredlunde/curls-addons'
import {Content} from '@stellar-apps/content'
import {Hero, Footer} from '~/ui'
import * as urls from '~/urls'

const Skills = ({title, children}) => (
  <Box grow p='1' basis='[calc(33.333% - 16px)]@tablet 100%@phone'>
    <Box kind='card' h='100%' minW='240' m='b1'>
      <Text kind='h3'>
        {title}
      </Text>
      <Text as='ul' m='0' size='xs'>
        {children}
      </Text>
    </Box>
  </Box>
)

const Tech = ({title, children}) => {
  children = children.split(', ')
  const lastIndex = children.length - 1

  return (
    <Skills title={title}>
      {children.map((child, i) => <Box
        as='li'
        d='inline'
        children={`${child}${i < lastIndex ? ', ' : ''}`}
      />)}
    </Skills>
  )
}

const Project = ({name, skills, children}) => (
  <Box as='li' grow d='inline' p='1' basis='[calc(33.333% - 16px)]@tablet 100%@phone'>
    <Box as='a' href={urls.gitHubRepo(name)}>
      <Box as='span' d='block' grow minW='240' m='b1' br='1' ov='hidden' h='100%'>
        <Box as='span' d='block' bg='dark' p='4@desktop 3@phone' h='100%'>
          <Text
            d='block'
            color='secondaryText'
            size='md'
            m='b2'
            aria-label={`Project title: "${name}"`}
          >
            {name}
          </Text>
          <Text kind='p' as='span' d='block' size='xs' color='lightGrey'>
            {children}
          </Text>
          <Box
            as='span'
            kind='row'
            aria-label={`Libraries and languages used in this project: ${skills.join(', ')}`}
          >
            {skills.map(skill =>
              <Text key={skill} size='xs' color='grey' m='r2' aria-hidden>
                {skill}
              </Text>,
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
)

const Experience = ({
  employer,
  employerDescription,
  linkTo,
  title,
  beginDate,
  endDate,
  stack,
  children
}) => (
  <Box kind='card' m='b3' maxW='480@desktop 100%@phone'>
    <Text kind='h3' m='b0' aria-label={`Employed by ${employer} from ${beginDate} to ${endDate}`}>
      {employer}
      {linkTo &&
      <A kind='a' href={linkTo} m='x1' size='xs'>
        <Icon name='outboundLink' title={`Visit ${employer}'s website`} size={12}/>
      </A>}
      {' '}
      <Text light size='xs' color='accentText' m='l1' aria-hidden>
        {beginDate}–{endDate}
      </Text>
    </Text>
    {employerDescription &&
    <Text size='xs' color='accentText' aria-label={`Employer description: ${employerDescription}`}>
      {employerDescription}
    </Text>}
    <Text d='block' m='b3' color='accentText' size='xs' aria-label={`Job title: "${title}"`}>
      {title}
    </Text>

    {children}

    <Text
      kind='p'
      color='accentText'
      size='xs'
      m='b0'
      aria-label={`Tech utilized: ${stack}`}
    >
      {stack}
    </Text>
  </Box>
)

export const OpenSource = props => (
  <Box kind='row' bg='white' pos='relative' p='y4@phone y5@desktop'>
    <Content kind='section' p='x3'>
      <Text kind='h2' center m='b4@desktop b3@phone' aria-label='Open source libraries'>
        Open source
      </Text>

      <Box as='ul' kind='blurbs' align='stretch'>
        <Project name='render-props' skills={['React', 'JavaScript']}>
          <span aria-hidden>㸚</span> React state containers utilizing the render props
          (function as child) pattern
        </Project>

        <Project name='react-broker' skills={['React', 'Webpack', 'Babel', 'JavaScript']}>
          <span aria-hidden>💸</span> SSR-capable async components & code splitting with Webpack 4+ and Babel 7+
        </Project>

        <Project name='react-hook' skills={['React', 'JavaScript']}>
          <span aria-hidden>↩</span> Reusable React hooks for function components
        </Project>

        <Project name='style-hooks' skills={['React', 'JavaScript', 'CSS']}>
          <span aria-hidden>🧚♀</span> ️Turn your React function components into responsive
          components with style props using Style Hooks and Emotion
        </Project>

        <Project name='curls' skills={['React', 'JavaScript', 'CSS']}>
          <span aria-hidden>💪🏼</span> A responsive, expressive design system for React
          written in Style Hooks and Emotion
        </Project>

        <Project name='masonic' skills={['React', 'JavaScript']}>
          <span aria-hidden>🧱</span> An autosizing, virtualized React masonry component
          based on work by Brian Vaughn
        </Project>

        <Project name='cargo-orm' skills={['Python', 'PostgreSQL']}>
          <span aria-hidden>🧩</span> An experimental, friendly, and rich Postgres ORM
          written for Python 3.5+
        </Project>

        <Project name='redis_structures' skills={['Python', 'Redis']}>
          <span aria-hidden>🐍</span> Pythonic Redis data structure abstractions
        </Project>

        <Project
          name='jared-lunde'
          skills={['React', 'JavaScript', 'CSS', 'Webpack', 'Serverless']}
        >
          <span aria-hidden>👋</span> View the code that went into this website
        </Project>
      </Box>
    </Content>
  </Box>
)

const Resume = () => (
  <>
    <Helmet>
      <title>Resume / Jared Lunde</title>
      <meta
        name='description'
        content={`Jared is self-motivated and takes pride in everything he writes. Striving to create tools that make development easy, deployment reliable, and iterating quick.`}
      />
      <link rel='canonical' href={urls.resume()}/>
    </Helmet>

    <Hero>
      <Box flex row='@desktop' column='@phone' align='start@tablet start@phone'>
        <Avatar
          src={require('~/public/images/profile.jpeg').src}
          size='md@desktop md@phone'
          m='b4@phone [t1 b0 r4]@desktop'
          minW='148@desktop'
          alt='A head shot of Jared Lunde'
        />

        <Text kind='hero' left='@phone'>
          <Text kind='h1' aria-label={`Resume for software engineering`}>
            Software Engineer
          </Text>
          <Text as='p' light m='b2'>
            I am self-motivated and take pride in everything I write.
            I strive to create software that makes development intuitive, deployment reliable,
            and iterating rapid.
          </Text>
          <Text as='p' size='sm' light>
            Professionally I have grown websites to 8-figure daily page view counts handling
            up to 12,000 active users at a time. One of my properties consistently reached the
            Alexa top 1000 list (top 500 US). Another appeared in popular media on Forbes.com,
            Dr. Phil, the Bill Cunningham Show, and Workaholics.
          </Text>
        </Text>
      </Box>
    </Hero>

    <Content kind='section' p='x3 b5@desktop b4@phone'>
      <Text kind='h2' p='l2@tablet' center>
        Skill set
      </Text>

      <Box kind='blurbs'>
        <Skills title='Grit'>
          <Box as='li' m='b2'>
            Self-employed for entire professional career
          </Box>
          <li>
            Engineered, grew, and exited two self-funded,
            high traffic websites
          </li>
        </Skills>
        <Skills title='Software'>
          <Box as='li' m='b2'>
            12 years developing websites
          </Box>
          <Box as='li' m='b2'>
            5 years programming in React
          </Box>
          <Box as='li' m='b2'>
            85+ public GitHub repositories
          </Box>
          <li>
            10,000+ weekly NPM downloads
          </li>
        </Skills>
        <Skills title='UI/UX'>
          <Box as='li' m='b2'>
            Began career in visual design
          </Box>
          <Box as='li' m='b2'>
            13 years creating user experiences
          </Box>
          <Box as='li'>
            2 years in professional branding
          </Box>
        </Skills>
      </Box>
    </Content>

    <Content kind='section' p='x3 b5@desktop b4@phone'>
      <Text kind='h2' center>
        Technical competencies
      </Text>

      <Box kind='blurbs'>
        <Tech title='Languages'>
          JavaScript, Node.js, Python, HTML, CSS, SCSS, SQL, GraphQL, Bash
        </Tech>
        <Tech title='Libraries'>
          React, Apollo, Serverless Framework, Webpack, Rollup, Express,
          Flask, Redis, PostgreSQL, MySQL, FFMPEG
        </Tech>
        <Tech title='AWS'>
          Lambda, API Gateway, RDS, VPC, CloudFormation, Route 53, S3, CloudFront, ElastiCache,
          SNS, SQS, Parameter Store
        </Tech>
      </Box>
    </Content>

    <OpenSource/>

    <Content kind='section' p='x3 [t4 b3]@phone [t5 b4]@desktop'>
      <Text kind='h2' center m='b4@desktop b3@phone'>
        Professional experience
      </Text>

      <Box kind='row' justify='between' align='start'>
        <Experience
          employer='Stellar'
          linkTo='https://bestellar.co'
          title='Software Engineer, Founder'
          beginDate='2018'
          endDate='Present'
          stack='React, Node.js, GraphQL, PostgreSQL, AWS'
        >
          <Text kind='p'>
            Served as the founder of a lead generation and web development firm in
            Denver, Colorado. Designed environments for rapidly releasing accessible landing pages
            tailored to convert ad campaigns. Focused on beautiful, lightweight
            pages for fast load times on everything from international 3G to broadband devices.
          </Text>

          <Text as='ul' m='b3' size='xs'>
            <Box kind='li'>
              Developed a <A kind='a' href={urls.gitHubRepo('stellar-apps')}>rich suite of frontend libraries</A> for
              rapidly launching and iterating on serverless landing pages for ad campaigns
            </Box>
            <Box kind='li'>
              Managed thousands of dollars in monthly ad spends
            </Box>
            <Box kind='li'>
              Generated up to 100 quality leads for clients each month
            </Box>
          </Text>
        </Experience>

        <Experience
          employer='Cool Story'
          employerDescription='MakeAGIF.com, MakeADare.com, et al.'
          title='Software Engineer, Co-Founder'
          beginDate='2010'
          endDate='2016'
          stack='JavaScript, Sass, REST, Python, MySQL, Redis, FFMPEG'
        >
          <Text kind='p'>
            Served as the technical co-founder for high traffic entertainment and
            social media websites. Solely designed, programmed, and scaled multiple web
            properties from zero to millions in daily visitors. Exited two
            properties via a sale of assets.
          </Text>

          <Text as='ul' m='b3' size='xs'>
            <Box kind='li'>
              Consistently delivered as many as 12 million page views to 1.8 million visitors
              per day with 99.99% uptime
            </Box>
            <Box kind='li'>
              Reliably served content which created up to $1M in revenue
              per year at a 75% margin on infrastructure and bandwidth costs
            </Box>
            <Box kind='li'>
              Transcoded as many as 5,000 videos and GIFs each day targeting mobile and desktop
              viewing devices
            </Box>
          </Text>
        </Experience>
      </Box>
    </Content>

    <Footer/>
  </>
)

export default Resume
