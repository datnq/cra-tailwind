import { useContext } from 'react'
import { TableContext } from './Table'

const useTable = () => {
  const { data, columns, options, state } = useContext(TableContext)

  return { data, columns, options, state }
}

export default useTable
