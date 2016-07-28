import React, { PropTypes } from 'react'

const Image = ({ src }) => <img className='o-image' src={src} />

Image.propTypes = {
  src: PropTypes.string.required
}

export default Image
