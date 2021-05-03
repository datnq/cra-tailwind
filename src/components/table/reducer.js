export const columnsReducer = (columns, action) => {
  const { type, column, index } = action
  if (type === 'add') {
    return [...columns, column]
  } else if (type === 'update') {
    columns[index] === column
    return [...columns]
  }
}
