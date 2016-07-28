import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class Panel extends Component {
  static propTypes = {
    topNav: PropTypes.element,
    bottomNav: PropTypes.element
  }

  constructor (props) {
    super(props)

    this.getPanel = this.getPanel.bind(this)
  }

  getPanel (node) {
    if (node.children.length > 1) {
      [...node.children].forEach((child) => {
        if (child.indexOf('c-nav') === -1) {
          console.warn('Invalid `topNav` or `bottomNav` prop supplied to `Panel`. Please only supply `Nav` component. ' +
            'Validation failed.')
        }
      })
    }
  }

  render () {
    const { topNav = null, bottomNav = null, children, ...rest } = this.props
    const className = classnames(
      'o-panel', {
        ['o-panel--nav-top']: topNav,
        ['o-panel--nav-bottom']: bottomNav
      }
    )

    return (
      <div className='o-panel-container' {...rest} ref={this.getPanel}>
        {topNav}
        <div className={className}>
          {children}
        </div>
        {bottomNav}
      </div>
    )
  }
}
