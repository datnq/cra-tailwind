import { Router } from '@reach/router'
import Github from './import/Github'

const Import = () => {
  return (
    <Router>
      <Github path='/github' />
    </Router>
  )
}

export default Import
