import { Router } from '@reach/router'
import Centerized from '../components/centerized'
import BlankLayout from '../layouts/BlankLayout'
import Github from './import/Github'

const Import = () => {
  return (
    <BlankLayout>
      <Centerized>
        <Router>
          <Github path='/github' />
        </Router>
      </Centerized>
    </BlankLayout>
  )
}

export default Import
