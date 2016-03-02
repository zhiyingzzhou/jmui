import React, { Component, PropTypes } from 'react'
import Page from '../Container/Page'
import Navbar from '../Bar/Navbar'
import Button from '../Button/Button'

export default class ErrorPage extends Component {

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    message: PropTypes.string,
    onBack: PropTypes.func,
    onIndex: PropTypes.func
  };

  static defaultProps = {
    title: '错误',
    message: '系统发生了一个未知错误'
  }

  renderNavbar () {
    const { onBack, title } = this.props
    if (onBack) {
      return (
        <Navbar
          title={title}
          left={[{
            icon: 'back',
            text: '返回',
            onTouchTap: onBack
          }]}
        />
      )
    }
    return (
      <Navbar title={title} />
    )
  }

  renderIcon () {
    const { icon } = this.props
    if (icon) {
      return icon
    }
    return (
      <i className='icon icon-error' />
    )
  }

  renderMessage () {
    const { message } = this.props
    return (
      <p>{message}</p>
    )
  }

  renderButton () {
    const { onIndex } = this.props
    if (onIndex) {
      return (
        <Button fill big onTouchTap={onIndex}>返回首页</Button>
      )
    }
    return null
  }

  render () {
    return (
      <Page
        fixed
        navbar={this.renderNavbar()}
        >
        <div className='content-block text-center'>
          {this.renderIcon()}
          {this.renderMessage()}
          {this.renderButton()}
        </div>
      </Page>
    )
  }
}
