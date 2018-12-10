import {createRoute} from '@inst-app/router'
import lazy from 'react-broker/macro'
import {AnimatedRoute, Loading} from './components'


const ErrorPage = lazy('../pages/Error', {loading: Loading})

export default createRoute({
  path: '*',
  exact: true,
  statusCode: 404,
  routeComponent: AnimatedRoute,
  component: ErrorPage,
  isDefault: true
})
