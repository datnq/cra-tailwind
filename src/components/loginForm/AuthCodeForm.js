import { useAtom } from 'jotai'
import { getTokenAtom } from '../../api/auth'
import { useSearchParam } from 'react-use'
import { useEffect } from 'react'

const LoginForm = ({ onToken }) => {
  const code = useSearchParam('code')
  const email = useSearchParam('state')
  const [getToken] = useAtom(getTokenAtom)

  useEffect(() => {
    if (code && email) {
      getToken({ email, code }).then(result => {
        const {
          access_token: accessToken,
          refresh_token: refreshToken,
        } = result
        onToken && onToken({ accessToken, refreshToken })
      })
    }
  }, [code, email])

  return null
}

export default LoginForm
