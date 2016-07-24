import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { positions, speeds } from '../constants'

import s from 'blaze/scss/components.bubbles.scss'
import a from 'blaze/scss/animations.bubbles.scss'

const Bubble = ({ position, from, speed, trigger, children, ...rest }) => {
  const className = classnames(
    s['c-bubble'], {
      [s[`c-bubble--${position}`]]: position,
      [a['a-bubble']]: trigger,
      [a[`a-bubble--${speed}`]]: speed,
      [a[`a-bubble--${from}`]]: from
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Bubble.propTypes = {
  position: PropTypes.oneOf(positions),
  from: PropTypes.oneOf(positions),
  speed: PropTypes.oneOf(speeds),
  trigger: PropTypes.bool
}

Bubble.defaultProps = {
  trigger: false
}

export default Bubble
