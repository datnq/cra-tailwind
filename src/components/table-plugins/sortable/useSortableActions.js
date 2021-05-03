import useTableState from '../../table/useTableState'

const useSortableActions = sortKey => {
  const { state = {}, setState } = useTableState()
  const { sorted = {} } = state

  const sort = (sortDirection, sortBy = sortKey) => {
    setState({
      ...state,
      sorted: {
        sortBy,
        sortDirection: sortDirection || 'asc',
      },
    })
  }

  return { sorted, sort }
}

export default useSortableActions
