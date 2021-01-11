import { useLocation } from '@reach/router'
import qs from 'qs'
import { useEffect } from 'react'
import useAPI from '../api/useAPI'

const GithubAuth = () => {
  const { search } = useLocation()
  const { code } = qs.parse(search, { ignoreQueryPrefix: true })
  const { auth } = useAPI()

  useEffect(() => {
    if (code) {
      auth.getToken(code).then(console.log)
    }
  }, [])

  return <span>{code}</span>
}

export default GithubAuth
