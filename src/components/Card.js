import React, { PropTypes } from 'react'
import classnames from 'classnames'

const Card = ({ shadow, group, children, ...rest }) => {
  const className = classnames(
    'c-card', {
      ['c-card--high']: shadow === 'high',
      ['c-card--higher']: shadow === 'higher',
      ['c-card--highest']: shadow === 'highest',
      ['c-card--grouped']: group
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Card.propTypes = {
  heading: PropTypes.string,
  shadow: PropTypes.oneOf([
    'high',
    'higher',
    'highest',
  ]),
  group: PropTypes.bool
}

const CardContent = ({ children, ...rest }) => (
  <div className='c-card__content' {...rest}>
    {children}
  </div>
)

const CardHeading = ({ children, ...rest }) => {
  return CardDivider({
    children,
    ...rest
  })
}

const CardItem = ({ children, ...rest }) => (
  <div className='c-card__item' {...rest}>
    {children}
  </div>
)

const CardDivider = ({ group, children, ...rest }) => {
  const className = classnames({
    ['c-card__content']: !group,
    ['c-card__content--divider']: !group,
    ['c-card__group-divider']: group
  })
  
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

CardDivider.propTypes = {
  group: PropTypes.bool
}

export {
  Card,
  CardContent,
  CardHeading,
  CardItem,
  CardDivider
}
