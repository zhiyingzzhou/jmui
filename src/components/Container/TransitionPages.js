import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class TransitionPages extends Component {

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
  };

  static getState (type = 'reval') {
    return {
      transition: type
    }
  };

  render () {
    const { location } = this.props
    let transition = 'sfr'
    if (location.state && location.state.transition && location.state.transition === 'reval') {
      transition = 'rfr'
    }
    return (
      <ReactCSSTransitionGroup
        component='div'
        className='pages'
        transitionName={`page-transition-${transition}`}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {
            key: location.pathname
          })}
      </ReactCSSTransitionGroup>
    )
  }
}
