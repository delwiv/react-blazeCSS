import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { extendedSizes } from '../constants'

const Container = ({ size, children, ...rest }) => {
  const className = classnames(
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
  size: PropTypes.oneOf(extendedSizes)
}

export default Container
