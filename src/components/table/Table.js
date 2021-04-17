import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import BaseTable, { AutoResizer } from 'react-base-table'
import { useEnhancedColumns } from './useEnhancedColumns'

import 'react-base-table/styles.css'

const Table = forwardRef(({ rowKey = 'id', ...props }, ref) => {
  const {
    defaultSelected = [],
    selectable,
    onSelectionChange,
    children,
    data = [],
    columns,
    ...tableProps
  } = props
  const [selected, setSelected] = useState(
    defaultSelected.map(i => i.toString()),
  )

  const selectableData = useRef([])

  const isFirstRender = useRef(true)

  useEffect(() => {
    selectableData.current = data.map(i => i[rowKey].toString())
  }, [data, rowKey])
  

  const allSelected = useMemo(() => {
    if (!selectableData.current.length || !selected) return false
    return selectableData.current.every(key => selected.includes(key))
  }, [selected])

  const select = useCallback(
    ({ value, checked }) => {
      const isSelected = selected.includes(value)
      if (checked && !isSelected) {
        setSelected([...selected, value])
      } else if (!checked && isSelected) {
        setSelected(selected.filter(i => i !== value))
      }
    },
    [selected],
  )

  const selectAll = useCallback(
    ({ checked }) => {
      if (checked) {
        setSelected(selectableData.current)
      } else {
        setSelected([])
      }
    },
    [],
  )

  const _columns = useEnhancedColumns(
    { rowKey, ...props },
    {
      selected,
      allSelected,
      onSelect: select,
      onSelectAll: selectAll,
    },
  )

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
    } else {
      onSelectionChange && onSelectionChange(selected)
    }
  }, [onSelectionChange, selected])

  return (
    <AutoResizer>
      {({ width, height }) => (
        <BaseTable
          width={width}
          height={height}
          data={data}
          rowKey={rowKey}
          columns={_columns}
          {...tableProps}
          ref={ref}
        />
      )}
    </AutoResizer>
  )
})

export default Table
