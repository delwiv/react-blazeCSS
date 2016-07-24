import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { extendedSizes } from '../constants'

import s from 'blaze/scss/objects.containers.scss'

const Container = ({ size, children, ...rest }) => {
  const className = classnames(
    s['o-container'], {
      [s[`o-container--${size}`]]: size
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ])
}

export default Container
