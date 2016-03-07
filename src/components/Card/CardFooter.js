import React, { Component, PropTypes } from 'react'
import CardFooterLink from './CardFooterLink'

export default class CardFooter extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  static Link = CardFooterLink;

  render () {
    return (
      <div className='card-footer'>{this.props.children}</div>
    )
  }
}
