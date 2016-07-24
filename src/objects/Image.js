import React, { PropTypes } from 'react'

import s from 'blaze/scss/objects.images.scss'

const Image = ({ src }) => <img className={s['o-image']} src={src} />

Image.propTypes = {
  src: PropTypes.string.required
}

export default Image
