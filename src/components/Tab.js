import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { states, speeds } from '../constants'

const TabContainer = ({ state, animate, speed, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-tabs', {
      [`c-tabs--${state}`]: state,
      ['a-tabs']: animate,
      [`a-tabs--${speed}`]: speed
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

TabContainer.propTypes = {
  state: PropTypes.oneOf(states),
  animate: PropTypes.bool,
  speed: PropTypes.oneOf(speeds),
  className: PropTypes.string
}

const TabHeading = ({ className, children, ...rest }) => {
  className = classnames(
    className,
    'c-tabs__headings'
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

TabHeading.propTypes = {
  className: PropTypes.string
}

const Tab = ({ active, disabled, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-tab-heading', {
      ['c-tab-heading--active']: active,
      ['c-tab-heading--disabled']: disabled
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Tab.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
}

const TabContent = ({ active, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-tabs__tab', {
      ['c-tabs__tab--active']: active
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

TabContent.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string
}

export {
  TabContainer,
  TabHeading,
  Tab,
  TabContent
}
