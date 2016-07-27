import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import s from 'blaze/scss/objects.panels.scss'

export default class Panel extends Component {
  static propTypes = {
    topNav: PropTypes.element,
    bottomNav: PropTypes.element
  }

  constructor (props) {
    super(props)

    this.getPanel = this.getPanel.bind(this)
  }

  componentDidMount () {
    if (process.env.NODE_ENV !== 'production') {
      if (this.panel.children.length > 1) {
        [...this.panel.children].forEach((child) => {
          if (child.indexOf('c-nav') === -1) {
            return new Error(
              'Invalid `topNav` or `bottomNav` prop supplied to `Panel`. Please only supply `Nav` component. Validation failed.'
            )
          }
        })
      }
    }
  }

  getPanel (node) {
    if (process.env.NODE_ENV !== 'production') {
      if (node.children.length > 1) {
        [...node.children].forEach((child) => {
          if (child.indexOf('c-nav') === -1) {
            console.warn('Invalid `topNav` or `bottomNav` prop supplied to `Panel`. Please only supply `Nav` component. ' +
              'Validation failed.')
          }
        })
      }
    }
  }

  render () {
    const { topNav = null, bottomNav = null, children, ...rest } = this.props
    const className = classnames(
      s['o-panel'], {
        [s['o-panel--nav-top']]: topNav,
        [s['o-panel--nav-bottom']]: bottomNav
      }
    )

    return (
      <div className={s['o-panel-container']} {...rest} ref={this.getPanel}>
        {topNav}
        <div className={className}>
          {children}
        </div>
        {bottomNav}
      </div>
    )
  }
}
