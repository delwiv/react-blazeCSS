import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { alignments, sizes, behaviors } from '../constants'

const Grid = ({ wrap, align, responsiveness, noGutter, className, children, ...rest }) => {
  const responsive = responsiveness
    ? responsiveness.map((item) => {
        return `o-grid--${item.size}-${item.behavior}`
      })
    : []
  
  className = classnames(
    className,
    'o-grid',
    responsive, {
      ['o-grid--wrap']: wrap,
      [`o-grid--${align}`]: align,
      ['o-grid--no-gutter']: noGutter
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Grid.propTypes = {
  wrap: PropTypes.bool,
  align: PropTypes.oneOf(alignments),
  responsiveness: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.oneOf(sizes).isRequired,
      behavior: PropTypes.oneOf(behaviors).isRequired
    })
  ),
  noGutter: PropTypes.bool,
  className: PropTypes.string
}

Grid.defaultProps = {
  wrap: false,
  noGutter: false
}

const Cell = ({ width, align, offset, responsive, noGutter, fixed, hidden, visible, className, children, ...rest }) => {
  className = classnames(
    className,
    'o-grid__cell', {
      [`o-grid__cell--width-${width}${responsive ? `@${responsive}` : ''}`]: width && width % 5 === 0 &&
        width > 0 && width <= 100 && responsive ? responsive : true,
      [`o-grid__cell--offset-${offset}`]: offset && offset % 5 === 0 && offset > 0 && offset <= 100,
      [`o-grid__cell--${align}`]: align,
      ['o-grid__cell--no-gutter']: noGutter,
      ['o-grid__cell--width-fixed']: fixed,
      ['o-grid__cell--visible']: visible,
      ['o-grid__cell--hidden']: hidden
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Cell.propTypes = {
  width: PropTypes.number,
  align: PropTypes.oneOf(alignments),
  offset: PropTypes.number,
  responsive: PropTypes.oneOf(sizes),
  noGutter: PropTypes.bool,
  fixed: PropTypes.bool,
  hidden: (props, propName, componentName) => {
    if (props[propName] !== true && props[propName] !== false) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName + '`. Validation failed.'
      )
    } else if (props.visible) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName + '`. `visible` is already defined. ' +
        'Validation failed.'
      )
    }
  },
  visible: (props, propName, componentName) => {
    if (props[propName] !== true && props[propName] !== false) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName + '`. Validation failed.'
      )
    } else if (props.hidden) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName + '`. `hidden` is already defined. ' +
        'Validation failed.'
      )
    }
  },
  className: PropTypes.string
}

Cell.defaultProps = {
  noGutter: false,
  fixed: false,
  hidden: false,
  visible: false
}

export {
  Grid,
  Cell
}
