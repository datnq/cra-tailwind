import tw from 'twin.macro'
import { Checkbox } from '../../form'
import usePlugins from '../../table/usePlugins'

const SelectionCell = ({ value = '' }) => {
  const { useSelectionActions } = usePlugins()

  const { select, deselect, isSelected } = useSelectionActions()

  const selectionChange = e => {
    const { checked, value } = e.target || {}
    checked ? select(value) : deselect(value)
  }

  return (
    <Checkbox
      onChange={selectionChange}
      value={value}
      checked={isSelected(value)}
    />
  )
}

export default SelectionCell
