import Column from './Column'
import SelectionCell from './SelectionCell'
import SelectionHeaderCell from './SelectionHeaderCell'

const SelectionColumn = ({ id, header, children, ...props }) => {
  return (
    <Column id='__selection__' {...props} header={<SelectionHeaderCell />}>
      <SelectionCell />
    </Column>
  )
}

export default SelectionColumn
