import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { states, extendedSizes } from '../constants'

import s from 'blaze/scss/components.buttons.scss'

const ButtonGroup = ({ round, children, ...rest }) => {
  const className = classnames(
    s['c-button-group'], {
      [s['c-button-group--rounded']]: round
    }
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

ButtonGroup.propTypes = {
  round: PropTypes.bool
}

ButtonGroup.defaultProps = {
  round: false
}

const Button = ({ type, state, size, block, ghost, round, close, children, ...rest }) => {
  const className = classnames(
    s['c-button'], {
      [s[`c-button--${state}`]]: state && !ghost,
      [s[`c-button--ghost-${state}`]]: state && ghost,
      [s[`c-button--${size}`]]: size,
      [s['c-button--block']]: block,
      [s['c-button--ghost']]: ghost,
      [s['c-button--rounded']]: round
    }
  )
  
  if (close) {
    return <button className='c-button c-button--close'>×</button>
  }

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
  round: PropTypes.bool,
  close: PropTypes.bool
}

Button.defaultProps = {
  type: 'button',
  block: false,
  ghost: false,
  round: false,
  close: false
}

export {
  ButtonGroup,
  Button
}
