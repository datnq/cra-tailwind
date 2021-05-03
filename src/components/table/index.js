import Table from './Table'
import Column from './Column'
import SelectionCell from './SelectionCell'
import SelectionHeaderCell from './SelectionHeaderCell'
import SelectionColumn from './SelectionColumn'

Table.Column = Column
Table.SelectionColumn = SelectionColumn
Table.SelectionCell = SelectionCell
Table.SelectionHeaderCell = SelectionHeaderCell

export { Column, SelectionColumn, SelectionCell, SelectionHeaderCell }

export default Table
