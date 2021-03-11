import React from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import styles from './index.less'

class Index extends React.Component {

  componentDidMount () {
    console.log(this)
  }

  render () {
    return (
      <>
        <div styleName='menu'>
        <Link to="/login" className='yellowse'>登录页</Link>
        </div>
        <div styleName='header'>header</div>
        <div styleName='content'>content</div>
        <div styleName='footer'>footer</div>
      </>
    )
  }
}

export default CSSModules(Index, styles, { allowMultiple: true })