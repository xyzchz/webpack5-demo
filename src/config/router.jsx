import React, { Component } from 'react'
import loadable from '@/utils/loadable'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routerConfig from './router'
export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={loadable(() => import('@/pages/Login/Login'))}></Route>
          <Route path='/' component={loadable(() => import('@/pages/Index/Index'))}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}