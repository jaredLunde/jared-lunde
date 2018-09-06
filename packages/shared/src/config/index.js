import createBrowserHistory from 'history/createBrowserHistory'

export __PLATFORM__ from './__PLATFORM__'
export __STAGE__ from './__STAGE__'

export const browserHistory = typeof window !== 'undefined' && createBrowserHistory()
