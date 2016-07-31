import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { states, extendedSizes } from '../constants'

const Input = ({ label, id, hint, area, type, state, size, disabled, className, children, ...rest }) => {
  className = classnames(
    className, {
      ['c-field']: !label || (label && id),
      ['c-label__field']: label && !id,
      [`c-field--${state}`]: state,
      [`c-field--${size}`]: size
    }
  )

  disabled = disabled ? { disabled: 'disabled' } : {}

  let input

  if (area) {
    input = (
      <textarea className={className} id={id} defaultValue={children} {...disabled} {...rest}></textarea>
    )
  } else {
    input = (
      <input type={type} className={className} defaultValue={children} id={id} {...disabled} {...rest} />
    )
  }

  if (label && id) {
    return (
      <div className='c-form-element'>
        <label className='c-label' htmlFor={id}>{label}</label>
        {input}
        {hint ? <div className='c-hint a-hint'>{hint}</div> : null}
      </div>
    )
  } else if (label && !id) {
    return (
      <label className='c-label c-form-element'>
        {label}
        {input}
        {hint ? <div className='c-hint a-hint'>{hint}</div> : null}
      </label>
    )
  }

  return input
}

Input.propTypes = {
  id: PropTypes.string,
  area: PropTypes.bool,
  state: PropTypes.oneOf(states),
  type: PropTypes.string,
  size: PropTypes.oneOf(extendedSizes),
  disabled: PropTypes.bool,
  className: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

const InputGroup = ({ rounded, roundedLeft, roundedRight, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-input-group', {
      ['c-input-group--rounded']: rounded,
      ['c-input-group--rounded-left']: !rounded && !roundedRight && roundedLeft,
      ['c-input-group--rounded-right']: !rounded && !roundedLeft && roundedRight
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

InputGroup.propTypes = {
  rounded: PropTypes.bool,
  roundedLeft: PropTypes.bool,
  roundedRight: PropTypes.bool,
  className: PropTypes.string
}

const FieldGroup = ({ inline, className, children, ...rest }) => {
  className = classnames(
    className, {
      ['c-field-group']: !inline,
      ['c-field-group-inline']: inline
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

FieldGroup.propTypes = {
  inline: PropTypes.bool,
  className: PropTypes.string
}

const Select = ({ state, size, disabled, className, ...rest }) => {
  className = classnames(
    className,
    'c-choice', {
      [`c-choice--${state}`]: state,
      [`c-choice--${size}`]: size
    }
  )

  disabled = disabled ? { disabled: 'disabled' } : {}

  return (
    <select className={className} {...disabled} {...rest}>
      {children}
    </select>
  )
}

Select.propTypes = {
  state: PropTypes.oneOf(states),
  size: PropTypes.oneOf(extendedSizes),
  disabled: PropTypes.bool
}

const Checkbox = ({ checked, state, size, disabled, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-choice', {
      [`c-choice--${state}`]: state,
      [`c-choice--${size}`]: size
    }
  )
  
  disabled = disabled ? { disabled: 'disabled' } : {}

  return (
    <label className={className} {...rest}>
      <input type='checkbox' defaultChecked={checked} {...disabled} /> {children}
    </label>
  )
}

Checkbox.propType = {
  checked: PropTypes.bool,
  state: PropTypes.oneOf(states),
  size: PropTypes.oneOf(extendedSizes),
  className: PropTypes.string
}

const Radio = ({ checked, name, value, state, size, disabled, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-choice', {
      [`c-choice--${state}`]: state,
      [`c-choice--${size}`]: size
    }
  )

  disabled = disabled ? { disabled: 'disabled' } : {}

  return (
    <label className={className} {...rest}>
      <input type='radio' name={name} value={value} defaultChecked={checked} {...disabled} /> {children}
    </label>
  )
}

Radio.propType = {
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  state: PropTypes.oneOf(states),
  size: PropTypes.oneOf(extendedSizes),
  className: PropTypes.string
}

const FieldSet = ({ disabled, legend, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-fieldset'
  )

  disabled = disabled ? { disabled: 'disabled' } : {}

  return (
    <fieldset className={className} {...disabled} {...rest}>
      {legend ? <legend className='c-fieldset__legend'>{legend}</legend> : null}
      {children}
    </fieldset>
  )
}

FieldSet.propTypes = {
  disabled: PropTypes.bool,
  legend: PropTypes.string,
  className: PropTypes.string
}

export {
  Input,
  InputGroup,
  FieldGroup,
  Select,
  Checkbox,
  Radio,
  FieldSet
}
