import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { positions, speeds } from '../constants'

const Bubble = ({ position, from, speed, trigger, children, ...rest }) => {
  const className = classnames(
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
  trigger: PropTypes.bool
}

Bubble.defaultProps = {
  trigger: false
}

export default Bubble
