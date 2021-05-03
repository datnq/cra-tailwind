import {
  Children,
  createContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
} from 'react'
import { useFirstMountState } from 'react-use'
import { columnsReducer, tableStateActions, tableStateReducer } from './reducer'
import TableConsumer from './TableConsumer'

export const TableContext = createContext()

const Table = ({
  data = [],
  children,
  initialState,
  onStateChange,
  ...options
}) => {
  const [columns, dispatchColumns] = useReducer(columnsReducer, [])
  const [state, dispatchState] = useReducer(tableStateReducer, initialState)

  useLayoutEffect(() => {
    dispatchState({ type: tableStateActions.INIT, payload: initialState })
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
      value={{ data, columns, options, state, dispatchState, dispatchColumns }}
    >
      {mountedFinish && <TableConsumer />}
      {children}
    </TableContext.Provider>
  )
}

export default Table
