import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Page extends Component {

  static propTypes = {
    fix: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    navbar: PropTypes.node,
    toolbar: PropTypes.node
  };

  static defaultProps = {
    fix: true
  };

  render () {
    const { children, fix, className, navbar, toolbar, ...props } = this.props
    const classes = classNames({
      'page': true,
      'navbar-fixed': fix && navbar,
      'toolbar-fixed': fix && toolbar
    }, className)
    return (
      <div className={classes} {...props}>
        {fix && navbar}
        <div className='page-content'>
          {!fix && navbar}
          {children}
          {!fix && toolbar}
        </div>
        {fix && toolbar}
      </div>
    )
  }
}
