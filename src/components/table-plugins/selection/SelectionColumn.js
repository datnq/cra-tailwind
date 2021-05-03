import clsx from 'clsx'
import Column from '../../table/Column'
import SelectionCell from './SelectionCell'
import SelectionHeaderCell from './SelectionHeaderCell'

const SelectionColumn = ({ id, header, children, className, ...props }) => {
  return (
    <Column
      id='__selection__'
      className={clsx('w-16', className)}
      header={<SelectionHeaderCell />}
      {...props}
    >
      <SelectionCell />
    </Column>
  )
}

export default SelectionColumn
