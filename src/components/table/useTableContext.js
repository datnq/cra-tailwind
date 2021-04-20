import { useContext } from 'react'
import { TableContext } from './Table'

const useTableContext = () => {
  const { data, columns, options } = useContext(TableContext)
  return { data, columns, options }
}

export default useTableContext
