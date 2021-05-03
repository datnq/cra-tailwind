import { useEffect, useRef } from 'react'

const useNextRender = (action, whenFinish) => {
  const isFirstRender = useRef(true)
  useEffect(() => {
    if (!isFirstRender.current) action()
  }, [action])

  useEffect(() => {
    if (whenFinish) isFirstRender.current = false
  }, [whenFinish])
}
export default useNextRender
