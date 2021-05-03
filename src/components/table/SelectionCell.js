import tw from 'twin.macro'
import { Checkbox } from '../form'
import useSelectionActions from './useSelectionActions'

const SelectionCell = ({ value = '' }) => {
  const { isSelected, select, deselect } = useSelectionActions()

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
