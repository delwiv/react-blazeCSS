import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { states } from '../constants'

import s from 'blaze/scss/components.badges.scss'

const Badge = ({ state, round, children, ...rest }) => {
  const className = classnames(
    s['c-badge'], {
      [s[`c-badge--${state}`]]: state,
      [s['c-badge--rounded']]: round
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
  round: PropTypes.bool
}

export default Badge
