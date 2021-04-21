import tw from 'twin.macro'
import {
  useTable,
  useRowSelect,
  useSortBy,
  usePagination,
  useFilters,
} from 'react-table'
import useTableContext from './useTableContext'
import useSelectionCheckbox from './useSelectionCheckbox'
import { IconArrowDown, IconArrowUp } from '@tabler/icons'
import { useEffect, useRef } from 'react'
import Pagination from '../pagination'
import HeaderCell from './HeaderCell'
import Icon from '../icon'

const TableConsumer = () => {
  const { data, columns, options } = useTableContext()
  const {
    rowKey,
    selectable,
    onSort,
    onSelect,
    pagination,
    defaultSort,
    onPageChange,
    defaultFilters,
    onFilter,
    stickyHeader,
    ...opts
  } = options

  const { totalPages = 0, rowPerPage = 20, currentPage = 0, pageOffset = 3 } =
    pagination || {}
  const enablePagination = !!pagination

  const sortKey = Array.isArray(defaultSort) ? defaultSort[0] : defaultSort
  const sortDirecttion =
    Array.isArray(defaultSort) && defaultSort.length > 0
      ? defaultSort[1]
      : 'asc'

  const enableFilter = !!defaultFilters

  const tableOptions = [
    {
      ...opts,
      data,
      columns,
      rowKey,
      getRowId: row => row[rowKey],
      manualSortBy: true,
      manualPagination: true,
      pageCount: totalPages,
      disableSortRemove: true,
      initialState: {
        pageIndex: currentPage,
        pageSize: rowPerPage,
        sortBy: [
          {
            id: sortKey,
            desc: sortDirecttion === 'desc',
          },
        ],
        filters: defaultFilters || [],
      },
    },
    useSortBy,
  ]

  if (enableFilter) {
    tableOptions[0].disableFilters = !enableFilter
    tableOptions.push(useFilters)
  }

  if (enablePagination) {
    tableOptions.push(usePagination)
  }

  if (selectable) {
    tableOptions.push(useRowSelect, useSelectionCheckbox)
  }

  const {
    headerGroups,
    rows,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    previousPage,
    nextPage,
    gotoPage,
    state: { selectedRowIds, sortBy, pageIndex, pageSize, filters },
  } = useTable(...tableOptions)

  const firstLoad = useRef(true)

  useEffect(() => {
    if (!firstLoad.current) {
      onFilter && onFilter(filters)
    } else {
      firstLoad.current = false
    }
  }, [filters, onFilter])

  useEffect(() => {
    if (!firstLoad.current) {
      onSort && onSort(sortBy)
    } else {
      firstLoad.current = false
    }
  }, [onSort, sortBy])

  useEffect(() => {
    if (!firstLoad.current) {
      onSelect && onSelect(Object.keys(selectedRowIds).map(key => key))
    } else {
      firstLoad.current = false
    }
  }, [onSelect, selectedRowIds])

  useEffect(() => {
    if (!firstLoad.current) {
      onPageChange && onPageChange({ pageIndex, pageSize })
    } else {
      firstLoad.current = false
    }
  }, [onPageChange, pageIndex, pageSize])

  return (
    <div tw='shadow border-b border-gray-200 sm:rounded-lg my-8 w-full overflow-hidden'>
      <table tw='w-full divide-y divide-gray-200 relative border-collapse' {...getTableProps()}>
        <thead tw='bg-gray-50'>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <HeaderCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  scope='col'
                  sticky={stickyHeader}
                >
                  <div tw='flex items-center'>
                    {column.render('Header')}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Icon icon={IconArrowDown} tw='ml-2' />
                      ) : (
                        <Icon icon={IconArrowUp} tw='ml-2' />
                      )
                    ) : (
                      ''
                    )}
                  </div>
                </HeaderCell>
              ))}
            </tr>
          ))}
        </thead>
        <tbody tw='bg-white divide-y divide-gray-200' {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td tw='px-6 py-4 whitespace-nowrap' {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      {enablePagination && (
        <div tw='flex bg-white p-4 justify-center'>
          <Pagination
            pageOffset={pageOffset}
            pageCount={totalPages}
            pageIndex={pageIndex}
            previousPage={previousPage}
            nextPage={nextPage}
            gotoPage={gotoPage}
          />
        </div>
      )}
    </div>
  )
}

export default TableConsumer
