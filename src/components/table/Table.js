import { createContext, useReducer } from 'react'
import TableConsumer from './TableConsumer'

export const TableContext = createContext()

const columnsReducer = (columns, action) => {
  const { type, column } = action
  if (type === 'add') {
    return [...columns, column]
  }
}

const Table = ({ data = [], children, ...options }) => {
  const [columns, dispatchColumns] = useReducer(columnsReducer, [])

  return (
    <TableContext.Provider value={{ data, columns, options, dispatchColumns }}>
      <TableConsumer />
      {children}
    </TableContext.Provider>
  )
}

export default Table
