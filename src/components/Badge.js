import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { states } from '../constants'

const Badge = ({ state, round, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-badge', {
      [`c-badge--${state}`]: state,
      ['c-badge--rounded']: round
    }
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  state: PropTypes.oneOf(states),
  round: PropTypes.bool,
  className: PropTypes.string
}

export default Badge
