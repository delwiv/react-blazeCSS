import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { states, extendedSizes } from '../constants'

const ButtonGroup = ({ round, children, ...rest }) => {
  const className = classnames(
    'c-button-group', {
      ['c-button-group--rounded']: round
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
    'c-button', {
      [`c-button--${state}`]: state && !ghost,
      [`c-button--ghost-${state}`]: state && ghost,
      [`c-button--${size}`]: size,
      ['c-button--block']: block,
      ['c-button--ghost']: ghost,
      ['c-button--rounded']: round
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
    case 'input':
      return (
        <input type='button' className={className} value={children} {...rest} />
      )
    case 'link':
      return (
        <a className={className} {...rest}>{children}</a>
      )
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
