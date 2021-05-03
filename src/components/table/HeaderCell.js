import { IconArrowDown, IconArrowUp } from '@tabler/icons'
import { cloneElement, isValidElement } from 'react'
import styledMap from 'styled-map'
import tw, { styled } from 'twin.macro'
import Icon from '../icon'

const Th = styled.th`
  ${tw`px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider`}
  ${styledMap({
    sticky: tw`sticky top-0`,
    default: '',
  })}
`

const SortIcon = ({ sortBy, direction, sortKey }) => {
  if (sortBy !== sortKey) return null

  return direction === 'desc' ? (
    <Icon icon={IconArrowDown} tw='ml-2' />
  ) : (
    <Icon icon={IconArrowUp} tw='ml-2' />
  )
}

const HeaderCell = ({ column }) => {
  const { sortable, sorted, sortKey, header } = column
  return (
    <Th>
      <div tw='flex items-center'>
        {isValidElement(header)
          ? cloneElement(header, {
              column,
            })
          : header}
        {sortable && <SortIcon sortKey={sortKey} {...sorted} />}
      </div>
    </Th>
  )
}

export default HeaderCell
