import { forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import BaseTable, { AutoResizer, Column } from 'react-base-table'
import { Checkbox } from '../form'

const SelectionColumn = forwardRef(
  ({ selected, allSelected, onSelect, onSelectAll, ...props }, ref) => {
    return (
      <Column
        {...props}
        ref={ref}
        cellRenderer={({ cellData }) => {
          return (
            <Checkbox
              value={cellData}
              checked={selected.includes(cellData)}
              onChange={onSelect}
            />
          )
        }}
        headerRenderer={() => {
          return (
            <Checkbox
              value='select-all'
              checked={allSelected}
              onChange={onSelectAll}
            />
          )
        }}
      />
    )
  },
)

const Table = forwardRef(
  (
    { defaultSelected, selectable, onSelectionChange, children, data = [], rowKey, ...props },
    ref,
  ) => {
    const [selected, setSelected] = useState(defaultSelected || [])
    const isFirstRender = useRef(true)

    const allSelected = useMemo(() => {
      if (!data.length || !selected) return false
      return data.map(i => i[rowKey]).every(key => selected.includes(key))
    }, [data, rowKey, selected])

    const isSelected = selected.includes(value)

    const select = e => {
      const { value, checked } = e.target
      if (checked && !isSelected) {
        setSelected([...selected, value])
      } else if (!checked && isSelected) {
        setSelected(selected.filter(i => i !== value))
      }
    }

    const selectAll = e => {
      const { checked } = e.target
      if (checked) {
        setSelected(data.map(i => i[rowKey]))
      } else {
        setSelected([])
      }
    }

    useEffect(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false
      } else {
        onSelectionChange(selected)
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
            {...props}
            ref={ref}
          >
            {selectable && (
              <SelectionColumn
                dataKey={rowKey}
                selected={selected}
                allSelected={allSelected}
                onSelect={select}
                onSelectAll={selectAll}
              />
            )}
            {children}
          </BaseTable>
        )}
      </AutoResizer>
    )
  },
)

export default Table
