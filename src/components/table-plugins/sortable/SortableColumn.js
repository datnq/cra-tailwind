import { Column } from '../../table'
import SortableHeaderCell from './SortableHeaderCell'

const SortableColumn = ({ sortKey, headerLabel, ...props }) => {
  return (
    <Column
      header={
        <SortableHeaderCell column={props} sortKey={sortKey || props.dataKey}>
          {headerLabel}
        </SortableHeaderCell>
      }
      {...props}
    />
  )
}

export default SortableColumn
