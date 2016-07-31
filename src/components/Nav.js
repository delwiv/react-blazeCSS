import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { positions, shadows, speeds, states } from '../constants'

const Nav = ({ brand, inline, position, fixed, shadow, animate, speed, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-nav', {
      ['c-nav--inline']: inline,
      [`c-nav--${position}`]: position,
      ['c-nav--fixed']: fixed,
      [`c-nav--${shadow}`]: shadow,
      ['a-nav']: animate,
      [`a-nav--${speed}`]: speed
    }
  )

  return (
    <ul className={className} {...rest}>
      {brand ? <li className='c-nav__content'>{brand}</li> : null}
      {children}
    </ul>
  )
}

Nav.propTypes = {
  brand: PropTypes.string,
  inline: PropTypes.bool,
  position: PropTypes.oneOf(positions),
  fixed: PropTypes.bool,
  shadow: PropTypes.oneOf(shadows),
  speed: PropTypes.oneOf(speeds),
  animate: PropTypes.bool,
  className: PropTypes.string
}

const NavItem = ({ href, state, active, right, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-nav__item', {
      ['c-nav__item--active']: active,
      ['c-nav__item--right']: right,
      [`c-nav__item--${state}`]: state
    }
  )
  
  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <li className={className} {...rest}>
      {children}
    </li>
  )
}

NavItem.propTypes = {
  state: PropTypes.oneOf(states),
  active: PropTypes.bool,
  right: PropTypes.bool,
  className: PropTypes.string
}

export {
  Nav,
  NavItem
}
