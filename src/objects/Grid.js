import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { alignments, sizes, sizesRegex, behaviorRegex } from '../constants'

import s1 from 'blaze/scss/objects.grid.scss'
import s2 from 'blaze/scss/objects.grid.responsive.scss'

const Grid = ({ wrap, align, size, behavior, noGutter, children, ...rest }) => {
  const className = classnames(
    s1['o-grid'], {
      [s1['o-grid--wrap']]: wrap,
      [s1[`o-grid--${align}`]]: align,
      [s2[`o-grid--${size}-${behavior}`]]: size && behavior,
      [s1['o-grid--no-gutter']]: noGutter
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
  size: (props, propName, componentName) => {
    if (!sizesRegex.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName + '`. Validation failed. Allowed values: ' +
        '`small`, `medium`, `large`.'
      )
    } else if (!props.behavior) {
      return new Error(
        'Missing prop `behavior` on `' + componentName + '` in addition to prop `' + propName + '`. Validation failed.'
      )
    }
  },
  behavior: (props, propName, componentName) => {
    if (!behaviorRegex.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName + '`. Validation failed. Allowed values: ' +
        '`fit`, `full`.'
      )
    } else if (!props.size) {
      return new Error(
        'Missing prop `extendedSizes` on `' + componentName + '` in addition to prop `' + propName + '`. Validation failed.'
      )
    }
  },
  noGutter: PropTypes.bool
}

Grid.defaultProps = {
  wrap: false,
  noGutter: false
}

const Cell = ({ width, align, offset, responsive, noGutter, fixed, hidden, visible, children, ...rest }) => {
  const className = classnames(
    s1['o-grid__cell'], {
      [s1[`o-grid__cell--width-${width}${responsive ? `@${responsive}` : ''}`]]: width && width % 5 === 0 &&
        width > 0 && width <= 100 && responsive ? responsive : true,
      [s1[`o-grid__cell--offset-${offset}`]]: offset && offset % 5 === 0 && offset > 0 && offset <= 100,
      [s1[`o-grid__cell--${align}`]]: align,
      [s1['o-grid__cell--no-gutter']]: noGutter,
      [s1['o-grid__cell--width-fixed']]: fixed,
      [s1['o-grid__cell--visible']]: visible,
      [s1['o-grid__cell--hidden']]: hidden
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
  }
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
