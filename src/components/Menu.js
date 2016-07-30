import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { positions, speeds, shadows } from '../constants'
import { Checkbox } from './Input'

const Menu = ({ combo, shadow, from, speed, trigger, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-menu', {
      [`c-menu--${shadow}`]: shadow,
      ['a-menu']: trigger,
      [`a-menu--${from}`]: from,
      [`a-menu--${speed}`]: speed
    }
  )

  if (combo) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    )
  }

  return (
    <ul className={className} {...rest}>
      {children}
    </ul>
  )
}

Menu.propTypes = {
  combo: PropTypes.bool,
  shadow: PropTypes.oneOf(shadows),
  from: PropTypes.oneOf(positions),
  speed: PropTypes.oneOf(speeds),
  trigger: PropTypes.bool,
  className: PropTypes.string
}

const MenuItem = ({ combo, disabled, active, divider, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-menu__item'
  )

  disabled = disabled ? { disabled: 'disabled' } : {}

  if (combo) {
    return (
      <Checkbox className='c-menu__item' {...disabled} {...rest}>
        {children}
      </Checkbox>
    )
  }

  className = classnames(
    className, {
      ['c-menu__item--divider']: divider,
      ['c-menu__item--disabled']: disabled,
      ['c-menu__item--active']: active
    }
  )

  return (
    <li className={className} {...rest}>
      {children}
    </li>
  )
}

MenuItem.propTypes = {
  combo: PropTypes.bool,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  divider: PropTypes.bool,
  className: PropTypes.string
}

export {
  Menu,
  MenuItem
}
