import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from '@inst-app/router'
import Broker from 'react-broker'
import createHistory from 'history/createBrowserHistory'
import App from '../App'


const history = createHistory()
const root = document.getElementById('⚛️')

async function render (App) {
  const app = <App router={Router} history={history}/>
  await Broker.loadAll(app)
  return ReactDOM.render(app, root)
}

if (__DEV__) {
  module.hot && module.hot.accept('../App', () => render(require('../App').default))
}

render(App)
