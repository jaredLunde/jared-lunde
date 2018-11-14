import React from 'react'
import Helmet from 'react-helmet'
import Paragraphs from '@render-props/paragraphs'
import {BreakPoint, A, Row, Box, Card, Type, H3, H2, P} from 'curls'
import {Header, Content, Cover} from '~/ui'
import {github} from '~/sitemap'


const intro = `
I am self-motivated and take pride in everything I write. I strive to create tools that make development easy, deployment reliable, and iterating quick.

Professionally I have scaled websites to 8-figure daily pageview counts handling over 12,000 active users at a time. My properties have reached the Alexa top 1000 list (top 500 US) and have appeared in popular media on Forbes.com, Workaholics, Dr. Phil and the Bill Cunningham Show.
`.trim()


function Blurb (props) {
  return (
    <Box
      grow
      basis={props.basis || '33.33%'}
      p='r4'
      css='min-width: 196px; max-width: 360px;'
    >
      <H3 sm m='b2' color='secondaryText'>
        {props.title}
      </H3>

      <P color='secondaryText' m='b3'>
        {props.children}
      </P>
    </Box>
  )
}

function BlurbGroup (props) {
  return <Row wrap m='t3 b3' justify='between' {...props}/>
}

function Section ({title, titleSize, children, ...props}) {
  return (
    <Box nodeType='section' {...props}>
      <H2 color='secondaryText' {...{[titleSize || 'md']: true}}>
        {title}
      </H2>

      {children}
    </Box>
  )
}

function GithubBox (props) {
  return (
    <Box
      fluid
      nodeType={A}
      href={github(props.pkg)}
      m='t2 r2'
      basis='30%'
      css='min-width: 240px;'
    >
      <Box bg='secondaryText' br={1}>
        <Box p='3'>
          <Type md regular color='secondaryLink'>
            {props.pkg}
          </Type>
        </Box>

        <Box p='x3'>
          <Type sm>
            {props.children}
          </Type>
        </Box>

        <Row wrap p='3'>
          {props.tags.map(
            tag => <Type key={tag} xs m='r2' children={tag}/>
          )}
        </Row>
      </Box>
    </Box>
  )
}

export default function Resume (prop) {
  return (
    <Box bg='lightestGrey' css='min-height: 100vh;'>
      <Helmet>
        <title>Resume - Jared Lunde</title>
      </Helmet>

      <Header/>

      <Content tight nodeType='main' p='l3 y4' pos='relative' z={1000}>
        <Section title='Jared Lunde' titleSize='lg' m='b4' p='r3'>
          <H3 regular md m='b3' color='secondaryText'>
            Software Engineer, UI/UX Designer
          </H3>

          <Paragraphs text={intro}>
            {({n, text}) => <P
              key={text}
              md={n === 0}
              children={text}
              color='secondaryText'
              m='b3'
            />}
          </Paragraphs>
        </Section>

        <Section title='Skills'>
          <BlurbGroup>
            <Blurb title='Grit'>
              Self-employed for entire professional career;
              Built and sold 3 self-funded, high-traffic websites
            </Blurb>

            <Blurb title='Software'>
              12 years developing websites and applications;
              3 years with React;
              2 years with React Native
            </Blurb>

            <Blurb title='UI/UX'>
              Began career in visual design; Several years of
              experience creating and testing user experiences
            </Blurb>
          </BlurbGroup>
        </Section>

        <Section title='Technical Competencies'>
          <BlurbGroup>
            <Blurb title='Languages'>
              Javascript/NodeJS, Python 3, HTML, CSS, SASS, SQL, Bash
            </Blurb>

            <Blurb title='Libraries'>
              React, React Native, Webpack, Express, Flask, Redis, PostgreSQL,
              Pillow, FFMPEG, ElasticSearch, NGINX
            </Blurb>

            <Blurb title='Certifications'>
              AWS Developer (Associate); AWS SysOps Administrator (Associate)
            </Blurb>
          </BlurbGroup>
        </Section>

        <Section p='r2' title={
          <Box nodeType='span' d='block' fm='b2'>Open Source</Box>
        }>
          <Row wrap m='t1 b4' justify='between'>
            <GithubBox pkg='render-props' tags={['React', 'Javascript']}>
              Easy-to-use React state containers utilizing the render
              props pattern
            </GithubBox>

            <GithubBox
              pkg='react-broker'
              tags={['React', 'Javascript', 'Babel', 'Webpack']}
            >
               Component lazy loading + code splitting that works with SSR,
               Webpack 4+, and Babel 7
            </GithubBox>

            <GithubBox pkg='curls' tags={['React', 'Javascript', 'CSS']}>
              An unopinionated CSS-in-JS UI component framework for React
              written using emotion.js
            </GithubBox>

            <GithubBox pkg='guff' tags={['Javascript', 'PostgreSQL']}>
              A no-nonsense extension of Knex and Objection.js for use with
              PostgreSQL clients
            </GithubBox>

            <GithubBox pkg='cargo-orm' tags={['Python', 'PostgreSQL']}>
              A fast, friendly, and rich Postgres ORM written for
              Python 3.5+.
            </GithubBox>

            <GithubBox pkg='redis_structures' tags={['Python', 'Redis']}>
              Pythonic data structures backed by Redis
            </GithubBox>

            <GithubBox
              pkg='jared-lunde'
              tags={['Javascript', 'Webpack', 'CSS', 'AWS']}
            >
              Check out how I develop real world applications by taking a look
              at the source of this website!
            </GithubBox>
          </Row>
        </Section>

        <Section title='Employment History'>

        </Section>
      </Content>
    </Box>
  )
}
