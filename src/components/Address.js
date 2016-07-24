import React, { PropTypes } from 'react'

import s from 'blaze/scss/components.addresses.scss'

const Address = ({ heading, children, ...rest }) => {
  return (
    <address className={s['c-address']} {...rest}>
      { heading ? <span className={s['c-address__heading']}>{heading}</span> : null }
      {children}
    </address>
  )
}

Address.propTypes = {
  heading: PropTypes.string
}

export default Address
