import React from 'react'

export const BeforeRouter = params => WrappedComponent => {
  return class NewComponent extends React.Component {
    render () {
      const { before } = params
      const flag = before.call(this)
      if(!flag) return ''
      return <WrappedComponent {...this.props} />
    }
  }
}

export default BeforeRouter