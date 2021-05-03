import { useEffect } from 'react'
import useTableColumns from './useTableColumns'

const Column = ({ dataKey, children, sortKey, sortDirection, id, ...opts }) => {
  const [columns, addColumn] = useTableColumns()

  useEffect(() => {
    const colId = id || dataKey
    const sorted = {
      sortBy: sortKey || dataKey,
      direction: sortDirection || 'asc',
    }
    if (columns.every(col => col.id !== colId)) {
      addColumn({
        id: colId,
        dataKey,
        sorted,
        cell: children,
        ...opts,
      })
    }
  }, [addColumn, children, columns, dataKey, id, opts, sortDirection, sortKey])

  return null
}

export default Column
