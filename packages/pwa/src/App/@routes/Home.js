import {createRoute} from '@inst-app/router'
import lazy from '@inst-app/ssr/lazy.macro'
import {home} from '~/sitemap'
import {Loading} from './components'


const HomePage = lazy('../pages/Home', {loading: Loading})

export default createRoute({
  path: home(),
  exact: true,
  component: HomePage,
})
