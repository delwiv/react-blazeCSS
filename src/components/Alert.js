import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { Button } from './Button'
import { positions, speeds, states } from '../constants'

const AlertContainer = ({ animate, from, speed, trigger, children, ...rest }) => {
  const className = classnames({
    ['a-alerts']: animate,
    ['a-alerts__alert']: trigger,
    [`a-alerts__alert--${speed}`]: speed && /slow|fast/.test(speed),
    [`a-alerts__alert--${from}`]: from && /top|bottom|left|right/.test(from)
  })

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

AlertContainer.propTypes = {
  animate: PropTypes.bool,
  from: PropTypes.oneOf(positions),
  speed: PropTypes.oneOf(speeds),
  trigger: PropTypes.bool
}

AlertContainer.defaultProps = {
  trigger: false
}

const Alert = ({ state, animate, from, speed, trigger, closable, children, ...rest }) => {
  const className = classnames(
    'c-alerts__alert', {
      [`c-alerts__alert--${state}`]: state,
      ['a-alerts']: animate,
      ['a-alerts__alert']: trigger,
      [`a-alerts__alert--${speed}`]: speed,
      [`a-alerts__alert--${from}`]: from
    }
  )

  return (
    <div className={className} {...rest}>
      {closable ? <Button close /> : null}
      {children}
    </div>
  )
}

Alert.propTypes = {
  state: PropTypes.oneOf(states),
  animate: PropTypes.bool,
  from: PropTypes.oneOf(positions),
  speed: PropTypes.oneOf(speeds),
  trigger: PropTypes.bool,
  closable: PropTypes.bool
}

Alert.defaultProps = {
  animate: false,
  trigger: false,
  closable: true
}

export {
  AlertContainer,
  Alert
}
