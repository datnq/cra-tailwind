import { useEffect } from 'react'
import useTableColumns from './useTableColumns'

const Column = ({ dataKey, children, id, ...opts }) => {
  const [columns, addColumn] = useTableColumns()

  useEffect(() => {
    const colId = id || dataKey
    if (columns.every(col => col.id !== colId)) {
      addColumn({
        id: colId,
        dataKey,
        cell: children,
        ...opts,
      })
    }
  }, [addColumn, children, columns, dataKey, id, opts])

  return null
}

export default Column
