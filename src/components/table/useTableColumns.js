import { useContext } from "react"
import { TableContext } from "./Table"

const useTableColumns = () => {
  const { columns, dispatchColumns } = useContext(TableContext)
  const addColumn = column => dispatchColumns({ type: 'add', column })

  return [columns, addColumn]
}

export default useTableColumns