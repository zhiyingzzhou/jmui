import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Page extends Component {

  static propTypes = {
    fixed: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    navbar: PropTypes.node,
    toolbar: PropTypes.node
  };

  static defaultProps = {
    fixed: true
  };

  render () {
    const { children, fixed, className, navbar, toolbar, ...props } = this.props
    const classes = classNames({
      'page': true,
      'navbar-fixed': fixed && navbar,
      'toolbar-fixed': fixed && toolbar
    }, className)
    return (
      <div className={classes} {...props}>
        {fixed && navbar}
        <div className='page-content'>
          {!fixed && navbar}
          {children}
          {!fixed && toolbar}
        </div>
        {fixed && toolbar}
      </div>
    )
  }
}
