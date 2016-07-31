import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { positions, speeds } from '../constants'

const Bubble = ({ position, from, speed, trigger, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-bubble', {
      [`c-bubble--${position}`]: position,
      ['a-bubble']: trigger,
      [`a-bubble--${speed}`]: speed,
      [`a-bubble--${from}`]: from
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
  trigger: PropTypes.bool,
  className: PropTypes.string
}

export default Bubble
