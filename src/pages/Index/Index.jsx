import React from 'react'
import { Link } from 'react-router-dom'

export default class Index extends React.Component {

  render () {
    return (
      <>
        主页layout
        <Link to="/login/111">登录页</Link>
      </>
    )
  }
}