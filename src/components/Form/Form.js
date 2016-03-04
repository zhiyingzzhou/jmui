import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Form extends Component {

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    multiLine: PropTypes.bool
  };

  static defaultProps = {
    multiLine: false
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
    const { className, children, multiLine, title, ...props } = this.props
    const classes = classNames({
      'list-block': true,
      'media-list': !!multiLine
    })
    return (
      <form className={className} {...props}>
        {this.renderTitle()}
        <div className={classes}>
          <ul>
            {children}
          </ul>
        </div>
      </form>
    )
  }
}
