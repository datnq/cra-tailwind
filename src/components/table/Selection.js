import { forwardRef, useMemo } from 'react'
import { Column as BaseColumn } from 'react-base-table'
import { Checkbox } from '../form'

export const SelectionCell = ({ cellData, column, rowData }) => {
  const { selected, onSelect, rowKey } = column

  const select = e => {
    const { checked, value } = e.target
    return onSelect({ checked, value })
  }

  const value = rowData[rowKey].toString()

  return (
    <Checkbox
      value={value}
      checked={selected.includes(value)}
      onChange={select}
    />
  )
}

export const SelectionHeader = ({ column }) => {
  const { allSelected, onSelectAll } = column

  const select = e => {
    const { checked, value } = e.target
    return onSelectAll({ checked, value })
  }

  return (
    <Checkbox
      value='__selectAll__'
      checked={allSelected}
      onChange={select}
    />
  )
}
