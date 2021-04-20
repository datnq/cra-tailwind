import { DotButton, PageButton, PrevNextButton, visiblePages } from './buttons'

const Pagination = ({
  pageCount,
  pageIndex,
  previousPage,
  nextPage,
  gotoPage,
  pageOffset = 2,
}) => {
  const firstPage = 0
  const lastPage = pageCount - 1
  const canPrev = pageCount && pageIndex > firstPage
  const canNext = pageCount && pageIndex < lastPage

  const showPrevDot = pageIndex - pageOffset > firstPage + 1
  const showNextDot = pageIndex + pageOffset < lastPage - 1

  return (
    pageCount > 1 && (
      <nav
        className='relative z-0 inline-flex'
        aria-label='Pagination'
      >
        {showPrevDot && (
          <PageButton goToPage={gotoPage} pageIndex={0}>
            First
          </PageButton>
        )}
        {canPrev && (
          <PrevNextButton direction='prev' navigatePage={previousPage} />
        )}
        {showPrevDot && <DotButton>&hellip;</DotButton>}
        {visiblePages(pageIndex, pageOffset, pageCount).map(page => (
          <PageButton
            key={`page-${page}`}
            currentPage={pageIndex}
            pageIndex={page}
            goToPage={gotoPage}
          >
            {page + 1}
          </PageButton>
        ))}
        {showNextDot && <DotButton>&hellip;</DotButton>}
        {canNext && <PrevNextButton direction='next' navigatePage={nextPage} />}
        {showNextDot && (
          <PageButton goToPage={gotoPage} pageIndex={pageCount - 1}>
            Last
          </PageButton>
        )}
      </nav>
    )
  )
}

export default Pagination
