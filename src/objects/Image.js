import React, { PropTypes } from 'react'
import classnames from 'classnames'

const Image = ({ src, className, ...rest }) => {
  className = classnames(
    className,
    'o-image'
  )

  return (
    <img className={className} src={src} {...rest} />
  )
}

Image.propTypes = {
  src: PropTypes.string.required,
  className: PropTypes.string
}

export default Image
