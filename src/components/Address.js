import React, { PropTypes } from 'react'

const Address = ({ heading, children, ...rest }) => {
  return (
    <address className='c-address' {...rest}>
      { heading ? <span className='c-address__heading'>{heading}</span> : null }
      {children}
    </address>
  )
}

Address.propTypes = {
  heading: PropTypes.string
}

Address.defaultProps = {
  heading: false
}

export default Address
