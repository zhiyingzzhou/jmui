import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import Navbar from '../src'

const renderer = TestUtils.createRenderer()

describe('Navbar', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Navbar />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    console.log(tree)
    expect(tree.type).toEqual(Navbar)
  })
})
