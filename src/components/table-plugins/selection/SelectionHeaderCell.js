import tw from 'twin.macro'
import { useMemo } from 'react'
import { Checkbox } from '../../form'
import useTable from '../../table/useTable'
import usePlugins from '../../table/usePlugins'

const SelectionHeaderCell = ({ column }) => {
  const { useSelectionActions } = usePlugins()
  
  const { isAllSelected, forceSelect } = useSelectionActions()
  const {
    data,
    options: { rowKey },
  } = useTable()

  const selectionKey = column?.dataKey || rowKey

  const dataKeys = useMemo(() => {
    return data.map(row => row[selectionKey].toString())
  }, [data, selectionKey])

  const isChecked = useMemo(() => isAllSelected(dataKeys), [
    dataKeys,
    isAllSelected,
  ])

  const selectionChange = e => {
    const { checked } = e.target || {}
    forceSelect(checked ? dataKeys : [])
  }

  return (
    <Checkbox
      onChange={selectionChange}
      value={`select-all-by-${rowKey}`}
      checked={isChecked}
    />
  )
}

export default SelectionHeaderCell
