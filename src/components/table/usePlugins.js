import { useContext } from 'react'
import { TableContext } from './Table'

const usePlugins = () => {
  const { plugins } = useContext(TableContext)

  return plugins
}

export default usePlugins
