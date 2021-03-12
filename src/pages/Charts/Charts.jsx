import React from 'react'
import { Link } from 'react-router-dom'

class Index extends React.Component {
  render () {
    return (
      <>
        数据统计
        <Link to='/group'>管理组</Link>
      </>
    )
  }
}

export default Index