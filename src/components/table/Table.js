import {
  Children,
  createContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import { useFirstMountState } from 'react-use'
import TableConsumer from './TableConsumer'

export const TableContext = createContext()

const columnsReducer = (columns, action) => {
  const { type, column, index } = action
  if (type === 'add') {
    return [...columns, column]
  } else if (type === 'update') {
    columns[index] === column
    return [...columns]
  }
}

const Table = ({
  data = [],
  children,
  state: initialState,
  onStateChange,
  ...options
}) => {
  const [columns, dispatchColumns] = useReducer(columnsReducer, [])

  const [state, setState] = useState(initialState)

  useLayoutEffect(() => {
    setState(initialState)
  }, [initialState])

  const childCount = useMemo(() => Children.count(children), [children])

  const mountedFinish = useMemo(() => childCount === columns.length, [
    childCount,
    columns.length,
  ])

  const isFirstMount = useFirstMountState()
  useEffect(() => {
    if (!isFirstMount && mountedFinish) {
      onStateChange(state)
    }
  }, [isFirstMount, mountedFinish, onStateChange, state])

  return (
    <TableContext.Provider
      value={{ data, columns, options, state, setState, dispatchColumns }}
    >
      {mountedFinish && <TableConsumer />}
      {children}
    </TableContext.Provider>
  )
}

export default Table
