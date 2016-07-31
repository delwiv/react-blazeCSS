import React, { PropTypes } from 'react'
import classnames from 'classnames'

const Address = ({ heading, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-address'
  )
  
  return (
    <address className={className} {...rest}>
      { heading ? <span className='c-address__heading'>{heading}</span> : null }
      {children}
    </address>
  )
}

Address.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string
}

export default Address
