import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { states } from '../constants'

const Paragraph = ({ className, children, ...rest }) => {
  className = classnames(
    className,
    'c-paragraph'
  )

  return (
    <p className={className} {...rest}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  className: PropTypes.string
}

const Link = ({ state, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-link', {
      [`c-link--${state}`]: state
    }
  )

  return (
    <a className={className} {...rest}>
      {children}
    </a>
  )
}

Link.propTypes = {
  state: PropTypes.oneOf(states),
  className: PropTypes.string
}

const Highlight = ({ className, children, ...rest }) => {
  className = classnames(
    className,
    'c-text--highlight'
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

Highlight.propTypes = {
  className: PropTypes.string
}

const Loud = ({ className, children, ...rest }) => {
  className = classnames(
    className,
    'c-text--loud'
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

Loud.propTypes = {
  className: PropTypes.string
}

const Quiet = ({ className, children, ...rest }) => {
  className = classnames(
    className,
    'c-text--quiet'
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

Quiet.propTypes = {
  className: PropTypes.string
}

const Abbr = ({ title, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-text--help'
  )

  return (
    <abbr className={className} title={title} {...rest}>
      {children}
    </abbr>
  )
}

Abbr.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
}

const Mono = ({ className, children, ...rest }) => {
  className = classnames(
    className,
    'c-text--mono'
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

Mono.propTypes = {
  className: PropTypes.string
}

const Kbd = ({ className, children, ...rest }) => {
  className = classnames(
    className,
    'c-kbd'
  )

  return (
    <kbd className={className} {...rest}>
      {children}
    </kbd>
  )
}

Kbd.propTypes = {
  className: PropTypes.string
}

const Code = ({ multiline, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-code', {
      ['c-code--multiline']: multiline
    }
  )

  return (
    <code className={className} {...rest}>
      {children}
    </code>
  )
}

Code.propTypes = {
  multiline: PropTypes.bool,
  className: PropTypes.string
}

const Blockquote = ({ from, state, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-blockquote', {
      [`c-blockquote--${state}`]: state
    }
  )

  return (
    <blockquote className={className} {...rest}>
      <div className='c-blockquote__body'>
        {children}
      </div>
      <footer className='c-blockquote__footer'>
        — {from}
      </footer>
    </blockquote>
  )
}

Blockquote.propTypes = {
  state: PropTypes.oneOf(states),
  from: PropTypes.string.isRequired,
  className: PropTypes.string
}

export {
  Paragraph,
  Link,
  Highlight,
  Loud,
  Quiet,
  Abbr,
  Mono,
  Kbd,
  Code,
  Blockquote
}
