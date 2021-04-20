import { useEffect } from 'react'
import useTableColumns from './useTableColumns'

const Column = ({ dataKey, header, children, sortable, ...opts }) => {
  const [columns, addColumn] = useTableColumns()

  useEffect(() => {
    if (columns.every(col => col.id !== dataKey)) {
      const props = {
        accessor: dataKey,
        id: dataKey,
        Header: header,
        disableSortBy: !sortable,
        ...opts
      }
      if (children) props.Cell = children
      addColumn(props)
    }
  }, [addColumn, children, columns, dataKey, header, opts, sortable])

  return null
}

export default Column
