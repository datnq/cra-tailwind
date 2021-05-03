import { useContext } from 'react'
import { TableContext } from './Table'

const useTableState = () => {
  const { state, setState } = useContext(TableContext)

  return { state, setState }
}

export default useTableState
