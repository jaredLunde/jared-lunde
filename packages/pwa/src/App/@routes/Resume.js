import {createRoute} from '@inst-app/router'
import lazy from 'react-broker/macro'
import {resume} from '~/sitemap'
import {AnimatedRoute, Loading} from './components'


export const ResumePage = lazy('../pages/Resume', {loading: Loading})

export default createRoute({
  path: resume(),
  exact: true,
  component: ResumePage,
  routeComponent: AnimatedRoute
})
