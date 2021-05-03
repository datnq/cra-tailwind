import tw from 'twin.macro'
import get from 'lodash.get'
import { cloneElement, createElement } from 'react'
import useTable from './useTable'
import { getCellKey } from './utils'

const Row = ({ rowData }) => {
  const {
    columns,
    options: { rowKey },
  } = useTable()

  return (
    <tr>
      {columns.map(column => {
        const value = get(rowData, column.dataKey)
        if (column.render) {
          return (
            <td
              key={getCellKey(rowData[rowKey], column.id)}
              tw='px-6 py-4 whitespace-nowrap'
            >
              {column.render(value, { column, rowData })}
            </td>
          )
        }
        return (
          <td
            key={getCellKey(rowData[rowKey], column.id)}
            tw='px-6 py-4 whitespace-nowrap'
          >
            {column.cell
              ? cloneElement(column.cell, { value, rowData, column })
              : createElement(({ value }) => <>{value}</>, { value })}
          </td>
        )
      })}
    </tr>
  )
}
export default Row
