import { Page, TransitionPages, Navbar, Block, Accordion } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class AccordionView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleBack () {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar
          title='折叠面板'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block title='默认' />
        <Accordion>
          <Accordion.Item title='爱是一个人'>
            <p>
              床头灯还留一盏<br />
              我试着赶走孤单<br />
              以为很简单<br />
              很快就能够习惯<br />
              连忘记都变成一种期盼<br />
              看窗外雨都停了<br />
              怎么也睡不着了<br />
              想要变勇敢<br />
              就算让自己难堪<br />
              习惯了顺其自然<br />
              不知算不算太晚<br />
              想念一个人<br />
              丢了自己的魂<br />
              她说给我温暖<br />
              永远爱我<br />
              却又说了不算<br />
              想念一个人<br />
              离开我的那个人<br />
              有些爱不能太天真<br />
              想念一个人<br />
              我恨我太认真<br />
              她说过会做我的另一半<br />
              却又说了不算<br />
              想念一个人<br />
              丢了我的那个人<br />
              我笑我太傻太天真
            </p>
          </Accordion.Item>
        </Accordion>
        <Block title='多行展开' />
        <Accordion>
          <Accordion.Item title='爱是一个人'>
            <p>
              床头灯还留一盏<br />
              我试着赶走孤单<br />
              以为很简单<br />
              很快就能够习惯<br />
              连忘记都变成一种期盼<br />
              看窗外雨都停了<br />
              怎么也睡不着了<br />
              想要变勇敢<br />
              就算让自己难堪<br />
              习惯了顺其自然<br />
              不知算不算太晚<br />
              想念一个人<br />
              丢了自己的魂<br />
              她说给我温暖<br />
              永远爱我<br />
              却又说了不算<br />
              想念一个人<br />
              离开我的那个人<br />
              有些爱不能太天真<br />
              想念一个人<br />
              我恨我太认真<br />
              她说过会做我的另一半<br />
              却又说了不算<br />
              想念一个人<br />
              丢了我的那个人<br />
              我笑我太傻太天真
            </p>
          </Accordion.Item>
          <Accordion.Item title='你问我爱你有多深'>
            <p>
              我爱你有几分<br />
              我的情也真<br />
              我的爱也真<br />
              月亮代表我的心<br />
              你问我爱你有多深<br />
              我爱你有几分<br />
              我的情不移<br />
              我的爱不变<br />
              月亮代表我的心<br />
              轻轻的一个吻<br />
              已经打动我的心<br />
              深深的一段情<br />
              教我思念到如今<br />
              你问我爱你有多深<br />
              我爱你有几分<br />
              你去想一想<br />
              你去看一看<br />
              月亮代表我的心<br />
              ......<br />
              ......<br />
              <br />
              轻轻的一个吻<br />
              已经打动我的心<br />
              深深的一段情<br />
              教我思念到如今<br />
              你问我爱你有多深<br />
              我爱你有几分<br />
              你去想一想<br />
              你去看一看<br />
              月亮代表我的心<br />
              你去想一想<br />
              你去看一看<br />
              月亮代表我的心<br />
            </p>
          </Accordion.Item>
        </Accordion>
      </Page>
    )
  }
}
