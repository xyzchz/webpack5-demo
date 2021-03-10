import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import router from '@/config/router.js'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/home' exact component={require('@/pages/Index/Index').default}></Route>
          <Route path='/login' exact component={require('@/pages/Login/Login').default}></Route>
          <Redirect exact from='/' to='/home' />
        </Switch>
      </BrowserRouter>
    )
  }
}