import React, { PropTypes } from 'react'
import classnames from 'classnames'

import s from 'blaze/scss/utilities.alignment.scss'

const Align = ({ vertical, horizontal, absolute, children, ...rest }) => {
  const className = classnames(
    s['u-center-block__content'], {
      [s['u-center-block--vertical']]: vertical,
      [s['u-center-block--horizontal']]: horizontal
    }
  )

  if (absolute) {
    return <div className='u-absolute-center' {...rest}>{children}</div>
  }

  return (
    <div className={s['u-center-block']}>
      <div className={className} {...rest}>
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
  }
}

Align.defaultProps = {
  vertical: false,
  horizontal: false,
  absolute: false
}

export default Align
