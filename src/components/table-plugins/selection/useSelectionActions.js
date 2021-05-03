import useTableState from '../../table/useTableState'

const useSelectionActions = () => {
  const { state = {}, setState } = useTableState()
  const { selected = [] } = state

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
      if (!actions.isSelected(id)) {
        setState({ ...state, selected: [...selected, id.toString()] })
      }
    },
    deselect(id) {
      if (actions.isSelected(id)) {
        setState({
          ...state,
          selected: selected.filter(i => i !== id.toString()),
        })
      }
    },
    forceSelect(ids) {
      setState({ ...state, selected: ids })
    },
  }
  return { ...actions }
}

export default useSelectionActions
