import React, { Component, PropTypes } from 'react'

export default class Toolbar extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired
  };

  render () {
    return (
      <div className='toolbar'></div>
    )
  }
}
