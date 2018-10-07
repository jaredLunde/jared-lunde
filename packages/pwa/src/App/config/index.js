import createBrowserHistory from 'history/createBrowserHistory'

export * from 'shared/config'
export * as assets from './assets'

export const browserHistory = typeof window !== 'undefined' && createBrowserHistory()
