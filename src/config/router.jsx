import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import router from '@/config/router.js'
import Home from '@/pages/Index/Index.jsx'
import Login from '@/pages/Login/Login.jsx'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route path='/home' exact component={require('@/pages/Index/Index.jsx').default}></Route>
        <Route path='/login' exact component={require('@/pages/Login/Login.jsx').default}></Route>
        <Redirect to="/home" from='/' exact />
      </BrowserRouter>
    )
  }
}