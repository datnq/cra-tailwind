import tw from 'twin.macro'
import { IconArrowDown, IconArrowUp } from '@tabler/icons'
import Icon from '../../icon'
import usePlugins from '../../table/usePlugins'

const SortIcon = ({ sortBy, sortDirection, sortKey }) => {
  if (!sortBy || sortBy !== sortKey) return null

  return sortDirection === 'desc' ? (
    <Icon icon={IconArrowDown} tw='ml-2' />
  ) : (
    <Icon icon={IconArrowUp} tw='ml-2' />
  )
}

const SelectionHeaderCell = ({ column, sortKey, children }) => {
  const { useSortableActions } = usePlugins()
  const { sorted, sort } = useSortableActions()

  const sortClick = () => {
    sort(sorted.sortDirection === 'desc' ? 'asc' : 'desc', sortKey)
  }

  return (
    <div tw='flex items-center' role='button' onClick={sortClick}>
      {children}
      <SortIcon sortKey={sortKey} {...sorted} />
    </div>
  )
}

export default SelectionHeaderCell
