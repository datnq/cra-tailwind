import { IconChevronLeft, IconChevronRight } from '@tabler/icons'
import tw, { styled } from 'twin.macro'
import Icon from '../icon'

export const NavButton = styled.button`
  ${tw`
    inline-flex items-center w-10 h-10 justify-center rounded-full mx-1
    text-sm font-medium text-gray-700
    hover:bg-gray-300 focus:outline-none
    transition-colors
  `}
  ${props => props.active ? tw`text-white bg-primary font-bold hover:bg-indigo-600` : ''}

`

export const DotButton = tw.span`
  relative inline-flex items-center w-10 h-10 justify-center bg-white text-sm text-gray-500
`

export const PageButton = ({ pageIndex, goToPage, currentPage, children }) => {
  const click = () => {
    goToPage(pageIndex)
  }
  return (
    <NavButton
      href='#'
      active={currentPage === pageIndex}
      onClick={click}
    >
      {children}
    </NavButton>
  )
}

export const PrevNextButton = ({ direction, navigatePage }) => {
  return direction === 'prev' ? (
    <NavButton href='#' tw='px-2' onClick={navigatePage}>
      <span className='sr-only'>Previous</span>
      <Icon icon={IconChevronLeft} />
    </NavButton>
  ) : (
    <NavButton href='#' tw='px-2' onClick={navigatePage}>
      <span className='sr-only'>Next</span>
      <Icon icon={IconChevronRight} />
    </NavButton>
  )
}

export const visiblePages = (pageIndex, pageOffset, totalPages) => {
  const pages = []
  const startIndex = Math.max(0, pageIndex - pageOffset)
  const endIndex = Math.min(totalPages - 1, pageIndex + pageOffset)
  for (let i = startIndex; i <= endIndex; i++) {
    pages.push(i)
  }
  return pages
}
