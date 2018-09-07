import React from 'react'
import ReactDOM from 'react-dom'
// import {Router} from '@inst-app/router'
import Lazy from '@inst-app/ssr/lazy'
// import createHistory from 'history/createBrowserHistory'
import App from '../App'


// const history = createHistory()
const root = document.getElementById('⚛️')

async function render (App) {
  // const app = <App router={Router} history={history}/>
  const app = <App/>
  await Lazy.loadAll(app)
  return ReactDOM.hydrate(app, root)
}

module.hot && module.hot.accept('../App', () => render(require('../App').default))
render(App)
