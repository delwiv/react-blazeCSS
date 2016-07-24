import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { states, extendedSizes } from '../constants'

import s from 'blaze/scss/components.buttons.scss'

const ButtonGroup = ({ rounded, children, ...rest }) => {
  const className = classnames(
    s['c-button-group'], {
      [s['c-button-group--rounded']]: rounded
    }
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

ButtonGroup.propTypes = {
  rounded: PropTypes.bool
}

const Button = ({ type, state, size, block, ghost, rounded, children, ...rest }) => {
  const className = classnames(
    s['c-button'], {
      [s[`c-button--${state}`]]: state && !ghost,
      [s[`c-button--ghost-${state}`]]: state && ghost,
      [s[`c-button--${size}`]]: size,
      [s['c-button--block']]: block,
      [s['c-button--ghost']]: ghost,
      [s['c-button--rounded']]: rounded
    }
  )

  switch (type) {
    case 'button':
      return (
        <button className={className} {...rest}>{children}</button>
      )

      break
    case 'input':
      return (
        <input type='button' className={className} value={children} {...rest} />
      )

      break
    case 'link':
      return (
        <a className={className} {...rest}>{children}</a>
      )

      break
  }
}

Button.propTypes = {
  type: PropTypes.oneOf([
    'button',
    'input',
    'link'
  ]),
  state: PropTypes.oneOf(states),
  size: PropTypes.oneOf(extendedSizes),
  block: PropTypes.bool,
  ghost: PropTypes.bool,
  rounded: PropTypes.bool
}

export {
  ButtonGroup,
  Button
}
