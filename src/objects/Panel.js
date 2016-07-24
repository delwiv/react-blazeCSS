import React, { PropTypes } from 'react'
import classnames from 'classnames'

import s from 'blaze/scss/objects.panels.scss'

const Panel = ({ topNav, bottomNav, children, ...rest }) => {
  const className = classnames(
    s['o-panel'], {
      [s['o-panel--nav-top']]: topNav,
      [s['o-panel--nav-bottom']]: bottomNav
    }
  )

  let navTop = ''
  let navBottom = ''
  const content = []

  if (children.length > 1) {
    children.forEach((child, index) => {
      if (child.isReactComponent && child.type.name === 'BlazeNav') {
        if (index === 0) {
          navTop = child
        } else {
          navBottom = child
        }
      } else {
        content.push(child)
      }
    })
  } else {
    content.push(children)
  }

  return (
    <div className={s['o-panel-container']} {...rest}>
      {navTop}
      <div className={className}>
        {content}
      </div>
      {navBottom}
    </div>
  )
}

Panel.propTypes = {
  topNav: PropTypes.bool,
  bottomNav: PropTypes.bool
}

export default Panel
