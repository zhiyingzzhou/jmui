import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class TabbarItem extends Component {

  static propTypes = {
    iconName: PropTypes.string,
    label: PropTypes.string,
    badge: PropTypes.node,
    active: PropTypes.bool,
    className: PropTypes.string
  };

  render () {
    const { iconName, label, badge, active, className, ...props } = this.props
    const classes = classNames({
      'tab-link': true,
      'active': active
    }, className)
    return (
      <a className={classes} {...props}>
        {iconName &&
          <i className={`icon ${iconName}`}>
          {badge}
          </i>
        }
        {label &&
          <span className='tabbar-label'>{label}</span>
        }
      </a>
    )
  }
}
