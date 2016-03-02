import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Form extends Component {

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
  };

  renderTitle () {
    const { title } = this.props
    if (title) {
      return (
        <div className='content-block-title'>{title}</div>
      )
    }
    return null
  }

  render () {
    const { className, children, ...props } = this.props
    const classes = classNames(className)
    return (
      <form className={classes} {...props}>
        {this.renderTitle()}
        <div className='list-block'>
          <ul>
            {children}
          </ul>
        </div>
      </form>
    )
  }
}
