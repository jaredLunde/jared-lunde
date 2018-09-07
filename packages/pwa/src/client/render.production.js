import React from 'react'
import ReactDOM from 'react-dom'
// import {Router} from '@inst-app/router'
import Lazy from '@inst-app/ssr/lazy'
// import createHistory from 'history/createBrowserHistory'
import App from '../App'


// const history = createHistory()
const root = document.getElementById('⚛️')
//const app = <App router={Router} history={history}/>
const app = <App/>
Lazy.loadAll(app).then(() => ReactDOM.hydrate(app, root))
