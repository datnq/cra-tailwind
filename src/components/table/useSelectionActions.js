import { useContext } from 'react'
import { tableStateActions } from './reducer'
import { TableContext } from './Table'

const useSelectionActions = () => {
  const {
    state: { selected = [] },
    dispatchState,
  } = useContext(TableContext)

  const actions = {
    isSelected(id) {
      return selected.length > 0 && selected.includes(id.toString())
    },
    isAllSelected(ids) {
      if (ids.length === 0) return false
      if (ids.length !== selected.length) return false
      return ids.every(id => actions.isSelected(id))
    },
    select(id) {
      dispatchState({ type: tableStateActions.SELECT, payload: id.toString() })
    },
    deselect(id) {
      dispatchState({
        type: tableStateActions.DESELECT,
        payload: id.toString(),
      })
    },
    forceSelect(ids) {
      dispatchState({ type: tableStateActions.FORCESELECT, payload: ids })
    },
  }
  return { ...actions }
}

export default useSelectionActions
