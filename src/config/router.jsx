import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import routerConfig from './router'
export default class App extends Component {
  getConfirmation = (...arg) => {
    console.log(arg)
  }

  render() {
    return (
      <BrowserRouter getUserConfirmation={this.getConfirmation}>
        <Switch>
          <Route path='/' component={require('@/pages/Index/Index').default}></Route>
          <Route path='/login' exact component={require('@/pages/Login/Login').default}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}