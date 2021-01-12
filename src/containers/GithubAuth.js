import { useLocation, useNavigate } from '@reach/router'
import qs from 'qs'
import { useEffect } from 'react'
import useAPI from '../api/useAPI'
import useAuth from '../components/app/useAuth'

const GithubAuth = () => {
  const { search } = useLocation()
  const navigate = useNavigate()
  const { code } = qs.parse(search, { ignoreQueryPrefix: true })
  const { auth } = useAPI()
  const [, setToken] = useAuth()

  useEffect(() => {
    if (code) {
      auth
        .getToken(code)
        .then(data => {
          const { access_token: accessToken, token_type: tokenType } = data
          setToken(`${tokenType} ${accessToken}`)
        })
        .then(() => {
          navigate('/', { replace: true })
        })
    }
  }, [])

  return <span>{code}</span>
}

export default GithubAuth
