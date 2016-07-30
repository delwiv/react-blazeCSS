import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { speeds } from '../constants'

const Overlay = ({ dismissable, transparent, full, animate, speed, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-overlay', {
      ['c-overlay--dismissable']: dismissable,
      ['c-overlay--transparent']: transparent,
      ['c-overlay--fullpage']: full,
      ['a-overlay']: animate,
      [`a-overlay--${speed}`]: speed
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Overlay.propTypes = {
  dismissable: PropTypes.bool,
  transparent: PropTypes.bool,
  full: PropTypes.bool,
  animate: PropTypes.bool,
  speed: PropTypes.oneOf(speeds),
  className: PropTypes.string
}

export default Overlay
