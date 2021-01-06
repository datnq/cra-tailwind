import { css } from 'styled-components'
import tw from 'twin.macro'

const autoColumns = props => css`
  grid-auto-columns: minmax(${props.minColumnWidth}, 1fr);
`
const columns = props => (props.cols ? tw`grid-cols-${props.cols}` : '')

const Grid = tw.div`
  ${columns}
  ${autoColumns}
  grid
`

export default Grid
