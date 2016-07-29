import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { extendedSizes, defaults } from '../constants'

const Heading = ({ size, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-heading', {
      [`c-heading--${size}`]: size
    }
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

Heading.propTypes = {
  size: PropTypes.oneOf(extendedSizes),
  className: PropTypes.string
}

Heading.defaultProps = {
  size: defaults.extendedSizes
}

export default Heading
