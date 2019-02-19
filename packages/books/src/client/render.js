import 'core-js/modules/es6.object.assign'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from '@inst-app/router'
import createHistory from 'history/createBrowserHistory'
import App from '../App'


const history = createHistory()
const root = document.getElementById('⚛️')

async function render (App) {
  return ReactDOM.render(<App router={Router} history={history}/>, root)
}

if (__DEV__) {
  module.hot && module.hot.accept('../App', () => render(require('../App').default))
}

render(App)
