import { useContext } from 'react'
import { TableContext } from './Table'

const useTableColumns = () => {
  const { columns, dispatchColumns } = useContext(TableContext)
  const addColumn = column => dispatchColumns({ type: 'add', column })
  const updateColumn = (index, column) =>
    dispatchColumns({ type: 'update', column, index })

  return [columns, addColumn, updateColumn]
}

export default useTableColumns
