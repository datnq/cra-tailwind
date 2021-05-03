import { cloneElement, isValidElement } from 'react'
import styledMap from 'styled-map'
import tw, { styled } from 'twin.macro'

const Th = styled.th`
  ${tw`px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider`}
  ${styledMap({
    sticky: tw`sticky top-0`,
    default: '',
  })}
`

const HeaderCell = ({ column, sticky }) => {
  const { header } = column
  return (
    <Th sticky={sticky}>
      {isValidElement(header)
        ? cloneElement(header, {
            column,
          })
        : header}
    </Th>
  )
}

export default HeaderCell
