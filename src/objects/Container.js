import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { extendedSizes } from '../constants'

const Container = ({ size, className, children, ...rest }) => {
  className = classnames(
    className,
    'o-container', {
      [`o-container--${size}`]: size
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Container.propTypes = {
  size: PropTypes.oneOf(extendedSizes),
  className: PropTypes.string
}

export default Container
