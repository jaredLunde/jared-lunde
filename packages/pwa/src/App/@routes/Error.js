import {createRoute} from '@inst-app/router'
import lazy from '@inst-app/ssr/lazy.macro'
import {Loading} from './components'


const ErrorPage = lazy('../pages/Error', {loading: Loading})

export default createRoute({
  path: '*',
  exact: true,
  statusCode: 404,
  component: ErrorPage,
  isDefault: true
})
