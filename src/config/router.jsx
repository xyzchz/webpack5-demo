import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routerConfig from './router'

const Login = (resolve) => {
  import('@/pages/Login/Login').then(module => {
    resolve(module)
  }).catch(error => {
    console.log(error)
  })
}
export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/' component={require('@/pages/Index/Index').default}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}