export const columnsReducer = (columns, action) => {
  const { type, column, index } = action
  if (type === 'add') {
    return [...columns, column]
  } else if (type === 'update') {
    columns[index] === column
    return [...columns]
  }
}

export const tableStateActions = {
  SELECT: 'select',
  DESELECT: 'deselect',
  FORCESELECT: 'force-select',
  INIT: 'init',
}

export const tableStateReducer = (state, action) => {
  const { type, payload } = action
  const { selected } = state
  const isSelected = value =>
    selected.length > 0 && selected.includes(value)

  switch (type) {
    case tableStateActions.INIT: {
      return payload
    }
    case tableStateActions.SELECT: {
      if (!isSelected(payload)) {
        return { ...state, selected: [...selected, payload] }
      }
      break
    }
    case tableStateActions.DESELECT: {
      if (isSelected(payload)) {
        return {
          ...state,
          selected: selected.filter(i => i !== payload),
        }
      }
      break
    }
    case tableStateActions.FORCESELECT: {
      return { ...state, selected: payload }
    }
    default:
  }
  return state
}
