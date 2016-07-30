import React, { PropTypes } from 'react'
import classnames from 'classnames'

const List = ({ ordered, unstyled, inline, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-list', {
      ['c-list--ordered']: ordered,
      ['c-list--unstyled']: unstyled,
      ['c-list--inline']: inline
    }
  )

  return (
    <ul className={className} {...rest}>
      {children}
    </ul>
  )
}

List.propTypes = {
  ordered: PropTypes.bool,
  unstyled: PropTypes.bool,
  inline: PropTypes.bool,
  className: PropTypes.string
}

const ListItem = ({ unstyled, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-list__item', {
      ['c-list__item--unstyled']: unstyled
    }
  )
  
  return (
    <li className={className} {...rest}>
      {children}
    </li>
  )
}

ListItem.propTypes = {
  unstyled: PropTypes.bool,
  className: PropTypes.string
}

export {
  List,
  ListItem
}