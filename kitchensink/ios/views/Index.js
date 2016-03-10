import React, { Component, PropTypes } from 'react'
import { Page, Navbar, List } from 'jmui'

export default class Index extends Component {

  static propTypes = {};

  static contextTypes = {
    router: PropTypes.object
  };

  handleJump (pathname) {
    this.context.router.push(pathname)
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar title='Kitchen Sink' />}>
        <List>
          <List.Group title='容器'>
            <List.Item
              icon={<span className='iconfont icon-fenleizukuaier' />}
              title='区块'
              after='Block'
              onClick={this.handleJump.bind(this, '/components/block')}
            />
            <List.Item
              icon={<span className='iconfont icon-wanggetu' />}
              title='网格'
              after='Grid'
              onClick={this.handleJump.bind(this, '/components/grid')}
            />
          </List.Group>
          <List.Group title='布局'>
            <List.Item
              icon={<span className='iconfont icon-shouji' />}
              title='视图'
              after='View'
              onClick={this.handleJump.bind(this, '/components/view')}
            />
            <List.Item
              icon={<span className='iconfont icon-wenjian1' />}
              title='静态页面组'
              after='Pages'
              onClick={this.handleJump.bind(this, '/components/pages')}
            />
            <List.Item
              icon={<span className='iconfont icon-qiehuan' />}
              title='动画页面组'
              after='TransitionPages'
              onClick={this.handleJump.bind(this, '/components/transitionpages')}
            />
            <List.Item
              icon={<span className='iconfont icon-wenjian' />}
              title='页面'
              after='Page'
              onClick={this.handleJump.bind(this, '/components/page')}
            />
          </List.Group>
        </List>
      </Page>
    )
  }
}
