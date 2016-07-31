import React, { PropTypes } from 'react'
import classnames from 'classnames'

const Table = ({ caption, striped, clickable, condensed, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-table', {
      ['c-table--striped']: striped,
      ['c-table--clickable']: clickable,
      ['c-table--condensed']: condensed
    }
  )

  return (
    <table className={className} {...rest}>
      {caption ? <caption className='c-table--caption'>{caption}</caption> : null }
      {children}
    </table>
  )
}

Table.propTypes = {
  caption: PropTypes.string,
  striped: PropTypes.bool,
  clickable: PropTypes.bool,
  condensed: PropTypes.bool,
  className: PropTypes.string
}

const TableHead = ({ className, children, ...rest }) => {
  className = classnames(
    className,
    'c-table__head'
  )

  return (
    <thead className={className} {...rest}>
      <tr className='c-table__row c-table__row--heading'>
        {children}
      </tr>
    </thead>
  )
}

TableHead.propTypes = {
  className: PropTypes.string
}

const TableBody = ({ className, children, ...rest }) => {
  className = classnames(
    className,
    'c-table__body'
  )

  return (
    <tbody className={className} {...rest}>
      {children}
    </tbody>
  )
}

TableBody.propTypes = {
  className: PropTypes.string
}

const TableRow = ({ inactive, clickable, className, children, ...rest }) => {
  className = classnames(
    className,
    'c-table__row', {
      ['c-table__row--inactive']: inactive,
      ['c-table__row--clickable']: clickable
    }
  )

  return (
    <tr className={className} {...rest}>
      {children}
    </tr>
  )
}

TableRow.proTypes = {
  inactive: PropTypes.bool,
  clickable: PropTypes.bool,
  className: PropTypes.string
}

const TableCell = ({ className, children, ...rest }) => {
  className = classnames(
    className,
    'c-table__cell'
  )

  return (
    <td className={className} {...rest}>
      {children}
    </td>
  )
}

TableCell.propTypes = {
  className: PropTypes.string
}

export {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
}
