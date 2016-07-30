import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { states, speeds } from '../constants'

const Range = ({ state, disabled, animate, speed, className, ...rest }) => {
  className = classnames(
    className,
    'c-range', {
      [`c-range--${state}`]: state,
      ['a-range']: animate,
      [`a-range--${speed}`]: speed
    }
  )

  disabled = disabled ? { disabled: 'disabled' } : {}

  return (
    <input type='range' className={className} {...disabled} {...rest} />
  )
}

Range.propTypes = {
  state: PropTypes.oneOf(states),
  disabled: PropTypes.bool,
  animate: PropTypes.bool,
  speed: PropTypes.oneOf(speeds),
  className: PropTypes.string
}

export default Range
