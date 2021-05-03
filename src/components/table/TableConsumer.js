import tw from 'twin.macro'
import useTable from './useTable'
import HeaderCell from './HeaderCell'
import Row from './Row'
import { getHeaderKey, getRowKey, getColumnKey } from './utils'

const TableConsumer = () => {
  const { data, columns, options } = useTable()
  const { rowKey, stickyHeader, ...opts } = options

  return (
    <div tw='shadow border-b border-gray-200 sm:rounded-lg my-8 w-full overflow-hidden'>
      <table
        tw='w-full divide-y divide-gray-200 relative border-collapse table-auto'
        {...opts}
      >
        <colgroup>
          {columns.map(column => (
            <col
              key={getColumnKey(column.id)}
              className={column.className}
              style={column.style}
            />
          ))}
        </colgroup>
        <thead tw='bg-gray-50'>
          <tr>
            {columns.map(column => (
              <HeaderCell
                key={getHeaderKey(column.id)}
                scope='col'
                sticky={stickyHeader}
                column={column}
              />
            ))}
          </tr>
        </thead>
        <tbody tw='bg-white divide-y divide-gray-200'>
          {data.map(row => (
            <Row key={getRowKey(row[rowKey])} rowData={row} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableConsumer
