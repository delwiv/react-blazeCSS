import React, { PropTypes } from 'react'
import classnames from 'classnames'

import s from 'blaze/scss/components.cards.scss'

const Card = ({ shadow, group, children, ...rest }) => {
  const className = classnames(
    s['c-card'], {
      [s['c-card--high']]: shadow === 'high',
      [s['c-card--higher']]: shadow === 'higher',
      [s['c-card--highest']]: shadow === 'highest',
      [s['c-card--grouped']]: group
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
  <div className={s['c-card__content']}>
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
  <div className={s['c-card__item']} {...rest}>
    {children}
  </div>
)

const CardDivider = ({ group, children, ...rest }) => {
  const className = classnames({
    [s['c-card__content']]: !group,
    [s['c-card__content--divider']]: !group,
    [s['c-card__group-divider']]: group
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
