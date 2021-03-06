import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

import store from './store'

// todo 组件数目若太多改为按需加载？
import Home from './pages/home'
import About from './pages/about'
import Articles from './pages/articles'

// production public url
const baseUrl = process.env.PUBLIC_URL

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path={baseUrl + '/'} component={Home} exact={true} />
        <Route path={baseUrl + '/about'} component={About} exact={true} />
        <Route path={baseUrl + '/:module/:column/:article'} component={Articles} exact={true} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
