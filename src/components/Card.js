import React, { PropTypes } from 'react'
import classnames from 'classnames'

const Card = ({ shadow, group, className, children, ...rest }) => {
  className = classnames(
    className,
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
    'highest'
  ]),
  group: PropTypes.bool,
  className: PropTypes.string
}

const CardContent = ({ className, children, ...rest }) => {
  className = classnames(
    className,
    'c-card__content'
  )
      
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

CardContent.propTypes = {
  className: PropTypes.string
}

const CardHeading = ({ className, children, ...rest }) => {
  return CardDivider({
    className,
    children,
    ...rest
  })
}

const CardItem = ({ className, children, ...rest }) => {
  className = classnames(
    className,
    'c-card__item'
  )
  
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

CardItem.propTypes = {
  className: PropTypes.string
}

const CardDivider = ({ group, className, children, ...rest }) => {
  className = classnames(
    className, {
      ['c-card__content']: !group,
      ['c-card__content--divider']: !group,
      ['c-card__group-divider']: group
    }
  )
  
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

CardDivider.propTypes = {
  group: PropTypes.bool,
  className: PropTypes.string
}

export {
  Card,
  CardContent,
  CardHeading,
  CardItem,
  CardDivider
}
