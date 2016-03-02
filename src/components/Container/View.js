import React, { Component, PropTypes } from 'react'

export default class View extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  render () {
    const { children } = this.props
    return (
      <div className='views'>
        <div className='view'>
          <div className='pages'>
          {children}
          </div>
        </div>
      </div>
    )
  }
}
