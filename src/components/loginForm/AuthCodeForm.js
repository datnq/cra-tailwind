import { tokenAtom } from '../../api/auth'
import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { login } from '../../api/firebase'

const AuthCodeForm = ({ onToken }) => {
  const [token] = useAtom(tokenAtom)

  useEffect(() => {
    if (!token) {
      login().then(onToken)
    }
  }, [token])

  return null
}

export default AuthCodeForm
