import React, { PropTypes } from 'react'
import classnames from 'classnames'

const Align = ({ vertical, horizontal, absolute, className, children, ...rest }) => {
  className = classnames(
    className,
    'u-center-block__content', {
      ['u-center-block--vertical']: vertical,
      ['u-center-block--horizontal']: horizontal
    }
  )

  if (absolute) {
    className = classnames(
      className,
      'u-absolute-center'
    )

    return (
      <div className={className} {...rest}>
        {children}
      </div>
    )
  }

  return (
    <div className='u-center-block' {...rest}>
      <div className={className}>
        {children}
      </div>
    </div>
  )
}

Align.propTypes = {
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  absolute: (props, propName, componentName) => {
    if (props[propName] !== true && props[propName] !== false) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName + '`. Validation failed.'
      )
    } else if (props.vertical) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName + '`. `vertical` is already defined. ' +
        'Validation failed.'
      )
    } else if (props.horizontal) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName + '`. `horizontal` is already defined. ' +
        'Validation failed.'
      )
    }
  },
  className: PropTypes.string
}

Align.defaultProps = {
  vertical: false,
  horizontal: false,
  absolute: false
}

export default Align
