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
import { columnsReducer } from './reducer'
import TableConsumer from './TableConsumer'

export const TableContext = createContext()

const Table = ({
  data = [],
  children,
  initialState,
  onStateChange,
  plugins,
  ...options
}) => {
  const [columns, dispatchColumns] = useReducer(columnsReducer, [])
  const [state, setState] = useState(initialState)

  useLayoutEffect(() => {
    setState(initialState)
  }, [initialState])

  const childCount = useMemo(() => Children.count(children), [children])
  const mountedFinish = useMemo(() => childCount && childCount === columns.length, [
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
      value={{ data, columns, options, state, setState, plugins, dispatchColumns }}
    >
      {mountedFinish && <TableConsumer />}
      {children}
    </TableContext.Provider>
  )
}

export default Table
