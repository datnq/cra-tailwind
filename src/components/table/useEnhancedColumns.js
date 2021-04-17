import { useMemo } from 'react'
import { Column, normalizeColumns } from 'react-base-table'
import { SelectionCell, SelectionHeader } from './Selection'

export const useEnhancedColumns = (props, options) => {
  const { columns, children, rowKey, selectable } = props
  const { selected, allSelected, onSelect, onSelectAll } = options

  return useMemo(() => {
    let _columns = columns || normalizeColumns(children)

    if (selectable) {
      const selectionColumn = {
        width: 40,
        flexShrink: 0,
        resizable: false,
        frozen: Column.FrozenDirection.LEFT,
        cellRenderer: SelectionCell,
        headerRenderer: SelectionHeader,
        key: '__selection__',
        rowKey,
        selected,
        allSelected,
        onSelect,
        onSelectAll,
      }
      _columns = [selectionColumn, ..._columns]
    }
    return _columns
  }, [
    allSelected,
    children,
    columns,
    onSelect,
    onSelectAll,
    rowKey,
    selectable,
    selected,
  ])
}
