import React from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import { BrowserRouter, Route, Redirect, Switch, Prompt } from 'react-router-dom';

import styles from './index.less'

class Index extends React.Component {

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <>
        <div styleName='menu'>
          <Link to="/login" className='yellowse'>登录页</Link>
        </div>
        <div styleName='header'>
        </div>
        <div styleName='content'>
            <Route path='/index' exact component={require('@/pages/Charts/Charts').default}></Route>
            <Route path='/group' exact component={require('@/pages/Group/Group').default}></Route>
            <Redirect to='/index' from='/' />
        </div>
        <div styleName='footer'>footer</div>
        <Prompt message={() => {
          console.log('leave')
          return true
        }}
        />
      </>
    )
  }
}

export default CSSModules(Index, styles, { allowMultiple: true })