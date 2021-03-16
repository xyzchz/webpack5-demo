import React from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import { BrowserRouter, Route, Redirect, Switch, Prompt } from 'react-router-dom';

import loadable from '@/utils/loadable'
import BeforeRouter from '@/components/BeforeRouter'
import styles from './index.less'

function before () {
  return true
}

@BeforeRouter({ before })
@CSSModules(styles, { allowMultiple: true })
export default class Index extends React.Component {

  componentDidMount () {
    setTimeout(() => {
      console.log(this.props)
    }, 3000);
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
            <Route path='/index' exact component={loadable(() => import('@/pages/Charts/Charts'))}></Route>
            <Route path='/group' exact component={loadable(() => import('@/pages/Group/Group'))}></Route>
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
