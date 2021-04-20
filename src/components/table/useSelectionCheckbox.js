import { Checkbox } from '../form'

const useSelectionCheckbox = hooks => {
  hooks.visibleColumns.push(columns => [
    {
      id: '__selection__',
      Header: ({ getToggleAllRowsSelectedProps }) => (
        <Checkbox {...getToggleAllRowsSelectedProps()} />
      ),
      Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
    },
    ...columns,
  ])
}
export default useSelectionCheckbox
