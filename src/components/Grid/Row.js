import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Row extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    noGutter: PropTypes.bool
  };

  static defaultProps = {
    noGutter: false
  };

  render () {
    const { className, children, noGutter, ...props } = this.props
    const classes = classNames({
      'row': true,
      'no-gutter': !!noGutter
    }, className)
    return (
      <div className={classes} {...props}>{children}</div>
    )
  }
}
