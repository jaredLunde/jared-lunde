import {createRoute} from '@inst-app/router'
import lazy from 'react-broker/macro'
import {home} from '~/sitemap'
import {AnimatedRoute, Loading} from './components'


const HomePage = lazy('../pages/Home', {loading: Loading})

export default createRoute({
  path: home(),
  exact: true,
  component: HomePage,
  routeComponent: AnimatedRoute
})
