import { useProxy } from 'valtio'
import { state } from '../../api/state'
import H1 from '../typography/H1'
import Empty from './Empty'

const CurrentTask = () => {
  const snapshot = useProxy(state)
  console.log(snapshot.now)
  return snapshot.now ? <H1>Haha</H1> : <Empty />
}

export default CurrentTask
