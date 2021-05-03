import { useContext, useMemo } from 'react'
import { TableContext } from './Table'
import useTable from './useTable'

const useTableState = stateName => {
  const { state, setState } = useContext(TableContext)

  if (!stateName) return [state, setState]

  const { selected = [] } = state
  const actions = {
    selected: {
      isSelected(id) {
        return selected.length > 0 && selected.includes(id.toString())
      },
      select(id) {
        if (!actions.selected.isSelected(id)) {
          setState({ ...state, selected: [...selected, id] })
        }
      },
      deselect(id) {
        if (actions.selected.isSelected(id)) {
          setState({
            ...state,
            selected: selected.filter(i => i !== id.toString()),
          })
        }
      },
      isAllSelected(ids) {
        if (ids.length === 0) return false
        if (ids.length !== selected.length) return false
        return ids.every(id => isSelected(id))
      },
      forceSelect(ids) {
        setState({ ...state, selected: ids })
      },
    },
  }

  const isSelected = id =>
    selected.length > 0 && selected.includes(id.toString())

  return [state[stateName], actions[stateName]]
}

export default useTableState
